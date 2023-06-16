import type { CompanyAutocompleteOptions, CompanyDataType } from '../types'
import { initialOptions } from '../utils/initialization'
import { addHistory, getHistory, isString, removeHistory, removeHtmlTags, setSuggestionItemClass } from '../utils'
import { debounce } from '../utils/throttle'
import { handleQueryData } from './api'
import { computePosition, autoUpdate, size, offset, flip } from '@floating-ui/dom'
import { clickOutside } from '../utils/click-outside'
import { handleAvatar } from './avatar'

class CompanyAutocomplete {
  private readonly options: CompanyAutocompleteOptions
  private readonly target: Element | null
  private suggestions: CompanyDataType[] = []
  private suggestionElement: HTMLDivElement = document.createElement('div')
  private suggestionActivatedClassName: string = 'suggestion-popper--activated'
  private inputWrapElement: HTMLElement = document.createElement('div')
  private inputWrapHaveWordsClassName: string = 'company-autocomplete--words'
  private inputWrapActivatedClassName: string = 'company-autocomplete--activated'
  private inputClearElement?: HTMLElement | null
  private selectCompany?: CompanyDataType
  private keyboardActiveIndex?: number
  private keyDownHandler: any

  constructor (args: Partial<CompanyAutocompleteOptions> = {}) {
    this.options = Object.assign({}, initialOptions, args)
    if (isString(this.options.target)) {
      this.target = document.querySelector(<string> this.options.target)
    } else {
      this.target = <Element> this.options.target
    }
    this.render()
  }

  private render (): void {
    if (!this.target) {
      return
    }
    // innerHTML数组方式 > createElement方式 > innerHTML字符串拼接方式
    const fragments = [
      `<div class="company-autocomplete ${this.options.showSubmitButton ? 'company-autocomplete--show-submit' : ''}">`,
      '<div class="company-autocomplete__input">',
      `<input type="text" placeholder="${this.options.placeholder}" />`,
      this.options.clearable ? `<div class="company-autocomplete__clear">${this.options.clearIcon}</div>` : '',
      '</div>',
      this.options.showSubmitButton ? '<div class="company-autocomplete__submit">' : '',
      this.options.showSubmitButton ? `<button type="button">${this.options.submitButtonLabel}</button>` : '',
      this.options.showSubmitButton ? '</div>' : '',
      '</div>'
    ]
    this.target.innerHTML = fragments.join('')
    this.suggestionElement.classList.add('suggestion-popper')
    this.clearSuggestion()
    document.body.appendChild(this.suggestionElement)
    this.inputWrapElement = <HTMLElement> this.target.querySelector('.company-autocomplete')
    const inputElement = <HTMLInputElement> this.inputWrapElement.querySelector('input')
    const buttonElement = <HTMLInputElement> this.inputWrapElement.querySelector('button')
    autoUpdate(this.inputWrapElement, this.suggestionElement, () => {
      computePosition(this.inputWrapElement, this.suggestionElement, {
        middleware: [
          offset(this.options.offsetTop),
          size({
            apply: ({ rects }) => {
              Object.assign(this.suggestionElement.style, {
                width: `${rects.reference.width}px`
              })
            }
          }),
          ...(this.options.autoFlip
            ? [
                flip({
                  fallbackPlacements: ['top']
                })
              ]
            : []
          )
        ]
      }).then(({ x, y }) => {
        Object.assign(this.suggestionElement.style, {
          left: `${x}px`,
          top: `${y}px`
        })
      })
    })
    inputElement?.addEventListener('input', () => {
      this.keyboardActiveIndex = undefined
      this.selectCompany = undefined
      const value = inputElement.value
      this.inputWrapElement.classList[value.length > 0 ? 'add' : 'remove'](this.inputWrapHaveWordsClassName)
      if (value.length === 0) {
        this.clearSuggestion()
        this.hideSuggestion()
      }
    })
    inputElement?.addEventListener('input', debounce(() => {
      const value = inputElement.value
      value && this.handleQuerySuggestion(value)
    }, this.options.queryDelay))

    inputElement?.addEventListener('click', (e) => {
      if (this.suggestions.length > 0) {
        this.showSuggestion()
        return
      }
      const value = (<HTMLInputElement> e.target).value
      if (value) {
        this.handleQuerySuggestion(value)
      } else if (this.options.history.enabled) {
        this.handleSuggestionDom(getHistory(this.options.history), 'history')
      }
    })

    buttonElement?.addEventListener('click', () => {
      this.handleSubmit(inputElement.value)
    })

    clickOutside(this.suggestionElement, () => {
      this.hideSuggestion()
    })

    this.suggestionElement.addEventListener('click', (e: MouseEvent) => {
      if ((<HTMLElement> e.target).closest('.suggestion')) {
        const suggestionElement = (<HTMLElement> e.target).closest('.suggestion')
        // const labelElement = (<HTMLElement> e.target).closest('.suggestion')?.querySelector('.suggestion__label')
        // const text = labelElement?.textContent || ''
        const name = (<HTMLElement> suggestionElement)?.dataset.name || ''
        inputElement.value = name
        this.suggestions = []
        this.selectCompany = {
          id: (<HTMLElement> suggestionElement)?.dataset.id || '',
          name
        }
        this.handleSelect()
        this.hideSuggestion()
      }
      if ((<HTMLElement> e.target).id === 'remove-history-link') {
        removeHistory(this.options.history)
        this.clearSuggestion()
        this.hideSuggestion()
      }
    })

    this.inputClearElement = this.inputWrapElement.querySelector('.company-autocomplete__clear')
    if (this.inputClearElement) {
      this.inputClearElement?.addEventListener('click', () => {
        this.selectCompany = undefined
        inputElement.value = ''
        this.clearSuggestion()
        this.inputWrapElement.classList.remove(this.inputWrapHaveWordsClassName)
        this.options.onClear()
      })
    }

    if (this.options.autoFocus) {
      inputElement.focus()
    }
  }

  private handleQuerySuggestion (value: string) {
    handleQueryData(value, this.options).then(data => {
      this.handleSuggestionDom(data)
    })
  }

  private handleSuggestionDom (data: CompanyDataType[], dataForm = 'fetch') {
    this.suggestions = data
    if (data.length === 0) {
      this.clearSuggestion()
      this.hideSuggestion()
      return
    }
    const suggestionFragments: string[] = [
      '<div class="suggestion-popper__body">'
    ]
    data.forEach((item: CompanyDataType) => {
      const name = removeHtmlTags(item.name)
      suggestionFragments.push(`<div class="suggestion" data-id="${item.id}" data-name="${name}">`)
      suggestionFragments.push(`<div class="suggestion__avatar"><img data-id="${item.id}" alt="${name}"/></div>`)
      suggestionFragments.push(`<div class="suggestion__label">${item.name}</div>`)
      suggestionFragments.push('<div class="suggestion__extra"></div>')
      suggestionFragments.push('</div>')
    })
    suggestionFragments.push('</div>')
    suggestionFragments.push('<div class="suggestion-popper__footer">')
    if (dataForm === 'history') {
      data.length > 0 && suggestionFragments.push('<a id="remove-history-link" href="javascript:;">删除历史</a>')
    }
    suggestionFragments.push('</div>')
    this.suggestionElement.innerHTML = suggestionFragments.join('')

    this.suggestionElement.querySelectorAll('img').forEach(img => {
      handleAvatar(img, this.options)
    })
    this.showSuggestion()
    this.options.onFetch()
  }

  private handleSelect () {
    if (this.options.history.enabled && this.selectCompany) {
      addHistory(this.selectCompany, this.options.history)
    }
    this.options.onSelect(this.selectCompany)
  }

  private handleSubmit (text: string) {
    this.options.submitCallback({
      company: this.selectCompany,
      text
    })
  }

  private showSuggestion () {
    this.inputWrapElement.classList.add(this.inputWrapActivatedClassName)
    this.suggestionElement.classList.add(this.suggestionActivatedClassName)
    this.keyDownHandler && this.inputWrapElement.removeEventListener('keydown', this.keyDownHandler)
    this.keyDownHandler = this.handleKeyDown.bind(this)
    this.inputWrapElement.addEventListener('keydown', this.keyDownHandler)
  }

  private hideSuggestion () {
    this.inputWrapElement.classList.remove(this.inputWrapActivatedClassName)
    this.suggestionElement.classList.remove(this.suggestionActivatedClassName)
    this.inputWrapElement.removeEventListener('keydown', this.keyDownHandler)
  }

  private clearSuggestion () {
    this.suggestionElement.textContent = ''
    this.suggestions = []
  }

  private handleKeyDown (event: KeyboardEvent) {
    switch (event.key) {
      case 'Enter':
        this.handleSubmit((<HTMLInputElement> event.target)?.value)
        break
      case 'ArrowUp':
        if (!this.keyboardActiveIndex) {
          this.keyboardActiveIndex = this.suggestions.length - 1
        } else {
          this.keyboardActiveIndex--
        }
        this.selectCompany = this.suggestions[this.keyboardActiveIndex]
        setSuggestionItemClass(
          Array.from(this.suggestionElement.querySelectorAll('.suggestion')),
          this.keyboardActiveIndex,
          'suggestion--keyboard-active'
        )
        break
      case 'ArrowDown':
        if (this.keyboardActiveIndex === undefined || this.keyboardActiveIndex >= this.suggestions.length - 1) {
          this.keyboardActiveIndex = 0
        } else {
          this.keyboardActiveIndex++
        }
        this.selectCompany = this.suggestions[this.keyboardActiveIndex]
        setSuggestionItemClass(
          Array.from(this.suggestionElement.querySelectorAll('.suggestion')),
          this.keyboardActiveIndex,
          'suggestion--keyboard-active'
        )
        break
    }
  }
}

export {
  CompanyAutocomplete
}
