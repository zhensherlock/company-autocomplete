import type { CompanyAutocompleteOptions, CompanyAutocompleteUserOptions, CompanyDataType } from '../types'
import { initialOptions } from '../utils/initialization'
import { isString, removeHtmlTags, setSuggestionItemClass } from '../utils'
import { addHistory, getHistory, removeHistory } from '../utils/history'
import { debounce } from '../utils/throttle'
import { handleQueryData } from './api'
import { computePosition, autoUpdate, size, offset, flip } from '@floating-ui/dom'
import { clickOutside } from '../utils/click-outside'
import { handleAvatar } from './avatar'

let autocompleteId = 0

const normalizeOptions = (args: CompanyAutocompleteUserOptions): CompanyAutocompleteOptions => {
  return {
    ...initialOptions,
    ...args,
    history: {
      ...initialOptions.history,
      ...args.history,
    },
  }
}

class CompanyAutocomplete {
  private readonly options: CompanyAutocompleteOptions
  private readonly target: Element | null
  private readonly suggestionId: string = `company-autocomplete-suggestions-${++autocompleteId}`
  private suggestions: CompanyDataType[] = []
  private suggestionElement: HTMLDivElement = document.createElement('div')
  private suggestionActivatedClassName: string = 'suggestion-popper--activated'
  private inputWrapElement: HTMLElement = document.createElement('div')
  private inputWrapHaveWordsClassName: string = 'company-autocomplete--words'
  private inputWrapActivatedClassName: string = 'company-autocomplete--activated'
  private inputClearElement?: HTMLElement | null
  private selectCompany?: CompanyDataType
  private keyboardActiveIndex?: number
  private inputElement?: HTMLInputElement
  private cleanupCallbacks: (() => void)[] = []
  private activeAbortController?: AbortController
  private querySequence = 0
  private dropdownVisible = false
  private isDestroyed = false
  private avatarObjectUrls: Set<string> = new Set()

  constructor(args: CompanyAutocompleteUserOptions = {}) {
    this.options = normalizeOptions(args)
    if (isString(this.options.target)) {
      this.target = document.querySelector(this.options.target)
    } else {
      this.target = this.options.target
    }
    this.render()
  }

  destroy(): void {
    if (this.isDestroyed) {
      return
    }
    this.isDestroyed = true
    this.cancelActiveQuery()
    this.cleanupCallbacks.splice(0).forEach(cleanup => {
      cleanup()
    })
    this.revokeAvatarObjectUrls()
    this.suggestions = []
    this.selectCompany = undefined
    this.keyboardActiveIndex = undefined
  }

  private render(): void {
    if (!this.target) {
      return
    }

    this.target.textContent = ''

    const inputWrapElement = document.createElement('div')
    inputWrapElement.className = 'company-autocomplete'
    if (this.options.showSubmitButton) {
      inputWrapElement.classList.add('company-autocomplete--show-submit')
    }

    const inputBoxElement = document.createElement('div')
    inputBoxElement.className = 'company-autocomplete__input'

    const inputElement = document.createElement('input')
    inputElement.type = 'text'
    inputElement.placeholder = this.options.placeholder
    inputElement.setAttribute('role', 'combobox')
    inputElement.setAttribute('aria-autocomplete', 'list')
    inputElement.setAttribute('aria-controls', this.suggestionId)
    inputElement.setAttribute('aria-expanded', 'false')
    inputElement.setAttribute('aria-haspopup', 'listbox')
    inputBoxElement.appendChild(inputElement)

    if (this.options.clearable) {
      const clearElement = document.createElement('button')
      clearElement.type = 'button'
      clearElement.className = 'company-autocomplete__clear'
      clearElement.setAttribute('aria-label', 'Clear input')
      const clearIconElement = document.createElement('span')
      clearIconElement.className = 'company-autocomplete__clear-icon'
      this.setIcon(clearIconElement, this.options.clearIcon)
      clearElement.appendChild(clearIconElement)
      inputBoxElement.appendChild(clearElement)
      this.inputClearElement = clearElement
    }

    inputWrapElement.appendChild(inputBoxElement)

    if (this.options.showSubmitButton) {
      const submitWrapElement = document.createElement('div')
      submitWrapElement.className = 'company-autocomplete__submit'
      const submitButtonElement = document.createElement('button')
      submitButtonElement.type = 'button'
      submitButtonElement.textContent = this.options.submitButtonLabel
      submitWrapElement.appendChild(submitButtonElement)
      inputWrapElement.appendChild(submitWrapElement)
      this.listen(submitButtonElement, 'click', () => {
        this.handleSubmit(this.inputElement?.value || '')
      })
    }

    this.target.appendChild(inputWrapElement)
    this.inputWrapElement = inputWrapElement
    this.inputElement = inputElement
    this.addCleanup(() => {
      this.inputWrapElement.remove()
    })

    this.suggestionElement.className = 'suggestion-popper'
    this.suggestionElement.id = this.suggestionId
    this.suggestionElement.setAttribute('role', 'listbox')
    this.clearSuggestion()
    if (this.options.popupAppendToBody) {
      document.body.appendChild(this.suggestionElement)
    } else {
      this.target.appendChild(this.suggestionElement)
    }
    this.addCleanup(() => {
      this.suggestionElement.remove()
    })

    const cleanupAutoUpdate = autoUpdate(this.inputWrapElement, this.suggestionElement, () => {
      computePosition(this.inputWrapElement, this.suggestionElement, {
        middleware: [
          offset(this.options.offsetTop),
          size({
            apply: ({ rects }) => {
              Object.assign(this.suggestionElement.style, {
                width: `${rects.reference.width}px`,
              })
            },
          }),
          ...(this.options.autoFlip
            ? [
                flip({
                  fallbackPlacements: ['top'],
                }),
              ]
            : []),
        ],
      }).then(({ x, y }) => {
        Object.assign(this.suggestionElement.style, {
          left: `${x}px`,
          top: `${y}px`,
        })
      })
    })
    this.addCleanup(cleanupAutoUpdate)

    const debouncedQuery = debounce(() => {
      const value = this.inputElement?.value || ''
      if (value) {
        this.handleQuerySuggestion(value)
      }
    }, this.options.queryDelay)
    this.addCleanup(() => {
      debouncedQuery.cancel()
    })

    this.listen(inputElement, 'input', () => {
      this.keyboardActiveIndex = undefined
      this.selectCompany = undefined
      this.updateActiveDescendant()
      const value = this.inputElement?.value || ''
      this.inputWrapElement.classList[value.length > 0 ? 'add' : 'remove'](this.inputWrapHaveWordsClassName)
      if (value.length === 0) {
        this.cancelActiveQuery()
        this.clearSuggestion()
        this.hideSuggestion()
      }
      debouncedQuery()
    })

    this.listen(inputElement, 'click', event => {
      if (this.suggestions.length > 0) {
        this.showSuggestion()
        return
      }
      const value = (event.target as HTMLInputElement).value
      if (value) {
        this.handleQuerySuggestion(value)
      } else if (this.options.history.enabled) {
        this.handleSuggestionDom(getHistory(this.options.history), 'history')
      }
    })

    this.addCleanup(
      clickOutside([this.suggestionElement, this.inputWrapElement], () => {
        this.hideSuggestion()
      }),
    )

    this.listen(this.suggestionElement, 'click', (event: Event) => {
      const target = event.target
      if (!(target instanceof HTMLElement)) {
        return
      }
      const suggestionElement = target.closest<HTMLElement>('.suggestion')
      if (suggestionElement) {
        this.selectSuggestionElement(suggestionElement)
        return
      }
      const removeHistoryElement = target.closest<HTMLButtonElement>('.suggestion-popper__clear')
      if (removeHistoryElement) {
        removeHistory(this.options.history)
        this.clearSuggestion()
        this.hideSuggestion()
      }
    })

    if (this.inputClearElement) {
      this.listen(this.inputClearElement, 'click', () => {
        this.handleClear()
      })
    }

    this.listen(this.inputWrapElement, 'keydown', (event: Event) => {
      this.handleKeyDown(event as KeyboardEvent)
    })

    this.listen(inputElement, 'focus', () => {
      this.options.onFocus()
    })

    this.listen(inputElement, 'blur', () => {
      this.options.onBlur()
    })

    if (this.options.autoFocus) {
      inputElement.focus()
    }
  }

  private addCleanup(cleanup: () => void): void {
    this.cleanupCallbacks.push(cleanup)
  }

  private listen(target: EventTarget, type: string, listener: EventListener): void {
    target.addEventListener(type, listener)
    this.addCleanup(() => {
      target.removeEventListener(type, listener)
    })
  }

  private setIcon(element: HTMLElement, icon: string): void {
    element.textContent = ''
    const svgDocument = new DOMParser().parseFromString(icon, 'image/svg+xml')
    const svgElement = svgDocument.documentElement
    if (svgElement.nodeName.toLowerCase() !== 'svg') {
      return
    }
    this.sanitizeSvgElement(svgElement)
    element.appendChild(document.importNode(svgElement, true))
  }

  private sanitizeSvgElement(element: Element): void {
    const allowedTags = new Set([
      'svg',
      'g',
      'path',
      'circle',
      'rect',
      'line',
      'polyline',
      'polygon',
      'ellipse',
      'title',
      'defs',
      'clippath',
      'lineargradient',
      'radialgradient',
      'stop',
    ])
    const allowedAttributes = new Set([
      'aria-hidden',
      'class',
      'clip-rule',
      'cx',
      'cy',
      'd',
      'fill',
      'fill-rule',
      'focusable',
      'height',
      'opacity',
      'r',
      'role',
      'rx',
      'ry',
      'stroke',
      'stroke-linecap',
      'stroke-linejoin',
      'stroke-width',
      'viewbox',
      'width',
      'x',
      'x1',
      'x2',
      'xmlns',
      'y',
      'y1',
      'y2',
    ])
    if (!allowedTags.has(element.tagName.toLowerCase())) {
      element.remove()
      return
    }
    Array.from(element.attributes).forEach(attribute => {
      const name = attribute.name.toLowerCase()
      const value = attribute.value.trim().toLowerCase()
      if (name.startsWith('on') || value.includes('javascript:') || !allowedAttributes.has(name)) {
        element.removeAttribute(attribute.name)
      }
    })
    Array.from(element.children).forEach(child => {
      this.sanitizeSvgElement(child)
    })
  }

  private cancelActiveQuery(): void {
    this.querySequence++
    this.activeAbortController?.abort()
    this.activeAbortController = undefined
  }

  private handleQuerySuggestion(value: string): void {
    const keyword = value.trim()
    this.activeAbortController?.abort()
    const abortController = new AbortController()
    const requestId = ++this.querySequence
    this.activeAbortController = abortController
    handleQueryData(keyword, this.options, abortController.signal)
      .then(data => {
        if (this.isDestroyed || requestId !== this.querySequence || abortController.signal.aborted) {
          return
        }
        this.handleSuggestionDom(data)
        this.options.onFetch(data, keyword)
      })
      .catch(error => {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return
        }
        if (this.isDestroyed || requestId !== this.querySequence) {
          return
        }
        this.clearSuggestion()
        this.hideSuggestion()
        this.options.onFetch([], keyword)
      })
  }

  private handleSuggestionDom(data: CompanyDataType[], dataForm = 'fetch'): void {
    this.revokeAvatarObjectUrls()
    this.suggestionElement.textContent = ''
    this.suggestions = data
    this.keyboardActiveIndex = undefined
    this.updateActiveDescendant()
    if (data.length === 0) {
      this.hideSuggestion()
      return
    }

    const bodyElement = document.createElement('div')
    bodyElement.className = 'suggestion-popper__body'

    data.forEach((item: CompanyDataType, index: number) => {
      const name = removeHtmlTags(item.name)
      const suggestionItemElement = document.createElement('div')
      suggestionItemElement.className = 'suggestion'
      suggestionItemElement.id = `${this.suggestionId}-option-${index}`
      suggestionItemElement.dataset.id = item.id
      suggestionItemElement.dataset.name = name
      if (item.avatar) {
        suggestionItemElement.dataset.avatar = item.avatar
      }
      suggestionItemElement.setAttribute('role', 'option')
      suggestionItemElement.setAttribute('aria-selected', 'false')

      if (item.avatar || (dataForm !== 'history' && this.options.avatarUrl)) {
        const avatarElement = document.createElement('div')
        avatarElement.className = 'suggestion__avatar'
        const imageElement = document.createElement('img')
        imageElement.dataset.id = item.id || ''
        imageElement.alt = name
        if (item.avatar) {
          imageElement.src = item.avatar
        } else {
          this.loadAvatar(imageElement)
        }
        avatarElement.appendChild(imageElement)
        suggestionItemElement.appendChild(avatarElement)
      } else if (dataForm === 'history') {
        const avatarElement = document.createElement('div')
        avatarElement.className = 'suggestion__avatar'
        const iconElement = document.createElement('span')
        iconElement.className = 'suggestion__avatar-icon'
        this.setIcon(iconElement, this.options.history.itemIcon)
        avatarElement.appendChild(iconElement)
        suggestionItemElement.appendChild(avatarElement)
      }

      const labelElement = document.createElement('div')
      labelElement.className = 'suggestion__label'
      labelElement.textContent = name
      suggestionItemElement.appendChild(labelElement)

      const extraElement = document.createElement('div')
      extraElement.className = 'suggestion__extra'
      suggestionItemElement.appendChild(extraElement)
      bodyElement.appendChild(suggestionItemElement)
    })

    this.suggestionElement.appendChild(bodyElement)

    const footerElement = document.createElement('div')
    footerElement.className = 'suggestion-popper__footer'
    if (dataForm === 'history' && this.options.history.showClear) {
      const clearHistoryElement = document.createElement('button')
      clearHistoryElement.type = 'button'
      clearHistoryElement.className = 'suggestion-popper__clear'
      const clearHistoryIconElement = document.createElement('span')
      clearHistoryIconElement.className = 'suggestion-popper__icon'
      this.setIcon(clearHistoryIconElement, this.options.history.clearIcon || '')
      clearHistoryElement.appendChild(clearHistoryIconElement)
      clearHistoryElement.appendChild(document.createTextNode('删除历史'))
      footerElement.appendChild(clearHistoryElement)
    }
    this.suggestionElement.appendChild(footerElement)

    this.showSuggestion()
  }

  private loadAvatar(imageElement: HTMLImageElement): void {
    handleAvatar(imageElement, this.options, this.activeAbortController?.signal)
      .then(avatarUrl => {
        if (avatarUrl) {
          this.avatarObjectUrls.add(avatarUrl)
        }
      })
      .catch(error => {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return
        }
      })
  }

  private selectSuggestionElement(suggestionElement: HTMLElement): void {
    const name = suggestionElement.dataset.name || ''
    this.inputElement!.value = name
    this.selectCompany = {
      id: suggestionElement.dataset.id || name,
      name,
      avatar: suggestionElement.dataset.avatar,
    }
    this.handleSelect()
    this.clearSuggestion()
    this.hideSuggestion()
    this.inputWrapElement.classList.add(this.inputWrapHaveWordsClassName)
  }

  private handleSelect(): void {
    if (this.options.history.enabled && this.selectCompany) {
      addHistory(this.selectCompany, this.options.history)
    }
    this.options.onSelect(this.selectCompany)
  }

  private handleSubmit(text: string): void {
    this.options.submitCallback({
      company: this.selectCompany,
      text,
    })
  }

  private showSuggestion(): void {
    this.inputWrapElement.classList.add(this.inputWrapActivatedClassName)
    this.suggestionElement.classList.add(this.suggestionActivatedClassName)
    this.inputElement?.setAttribute('aria-expanded', 'true')
    if (!this.dropdownVisible) {
      this.dropdownVisible = true
      this.options.onDropdownVisibleChange(true)
    }
  }

  private hideSuggestion(): void {
    this.inputWrapElement.classList.remove(this.inputWrapActivatedClassName)
    this.suggestionElement.classList.remove(this.suggestionActivatedClassName)
    this.inputElement?.setAttribute('aria-expanded', 'false')
    if (this.dropdownVisible) {
      this.dropdownVisible = false
      this.options.onDropdownVisibleChange(false)
    }
  }

  private clearSuggestion(): void {
    this.revokeAvatarObjectUrls()
    this.suggestionElement.textContent = ''
    this.suggestions = []
    this.keyboardActiveIndex = undefined
    this.updateActiveDescendant()
  }

  private handleKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Enter':
        if (this.dropdownVisible && this.keyboardActiveIndex !== undefined && this.selectCompany) {
          event.preventDefault()
          const activeElement =
            this.suggestionElement.querySelectorAll<HTMLElement>('.suggestion')[this.keyboardActiveIndex]
          if (activeElement) {
            this.selectSuggestionElement(activeElement)
          }
        } else {
          this.handleSubmit((event.target as HTMLInputElement)?.value || '')
        }
        break
      case 'ArrowUp':
        this.moveActiveSuggestion('prev', event)
        break
      case 'ArrowDown':
        this.moveActiveSuggestion('next', event)
        break
      case 'Escape':
        this.handleClear()
        break
      case 'Tab':
        this.hideSuggestion()
        break
    }
  }

  private moveActiveSuggestion(direction: 'prev' | 'next', event: KeyboardEvent): void {
    if (this.suggestions.length === 0) {
      return
    }
    event.preventDefault()
    if (direction === 'prev') {
      if (this.keyboardActiveIndex === undefined || this.keyboardActiveIndex <= 0) {
        this.keyboardActiveIndex = this.suggestions.length - 1
      } else {
        this.keyboardActiveIndex--
      }
    } else if (this.keyboardActiveIndex === undefined || this.keyboardActiveIndex >= this.suggestions.length - 1) {
      this.keyboardActiveIndex = 0
    } else {
      this.keyboardActiveIndex++
    }
    this.selectCompany = this.suggestions[this.keyboardActiveIndex]
    const suggestionElements = Array.from(this.suggestionElement.querySelectorAll<HTMLElement>('.suggestion'))
    setSuggestionItemClass(suggestionElements, this.keyboardActiveIndex, 'suggestion--keyboard-active')
    this.updateActiveDescendant(suggestionElements[this.keyboardActiveIndex])
    suggestionElements[this.keyboardActiveIndex]?.scrollIntoView({ block: 'nearest' })
    this.handleBackFill()
    this.showSuggestion()
  }

  private updateActiveDescendant(activeElement?: HTMLElement): void {
    if (activeElement) {
      this.inputElement?.setAttribute('aria-activedescendant', activeElement.id)
      return
    }
    this.inputElement?.removeAttribute('aria-activedescendant')
  }

  private handleBackFill(): void {
    if (this.options.backFill) {
      this.inputElement!.value = removeHtmlTags(this.selectCompany?.name || '')
      this.inputWrapElement.classList.add(this.inputWrapHaveWordsClassName)
    }
  }

  private handleClear(): void {
    this.cancelActiveQuery()
    this.selectCompany = undefined
    this.inputElement!.value = ''
    this.clearSuggestion()
    this.hideSuggestion()
    this.inputWrapElement.classList.remove(this.inputWrapHaveWordsClassName)
    this.options.onClear()
  }

  private revokeAvatarObjectUrls(): void {
    this.avatarObjectUrls.forEach(url => {
      URL.revokeObjectURL(url)
    })
    this.avatarObjectUrls.clear()
  }
}

export { CompanyAutocomplete }
