import { CompanyAutocompleteOptions, CompanyDataType } from '../types'
import { initialOptions } from '../utils/initialization'
import { isString } from '../utils'
import { debounce } from '../utils/throttle'
import { handleQueryData } from './api'
import { computePosition, autoUpdate, size, offset } from '@floating-ui/dom'
import { clickOutside } from '../utils/click-outside'

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
      '<div class="company-autocomplete">',
      '<div class="company-autocomplete__input">',
      `<input type="text" placeholder="${this.options.placeholder}" />`,
      '</div>',
      this.options.clearable && `<div class="company-autocomplete__clear">${this.options.clearIcon}</div>`,
      '</div>'
    ]
    this.target.innerHTML = fragments.join('')
    this.suggestionElement.classList.add('suggestion-popper')
    this.suggestionElement.textContent = ''
    document.body.appendChild(this.suggestionElement)
    this.inputWrapElement = <HTMLElement> this.target.querySelector('.company-autocomplete')
    const inputElement = <HTMLInputElement> this.inputWrapElement.querySelector('input')
    autoUpdate(this.inputWrapElement, this.suggestionElement, () => {
      computePosition(this.inputWrapElement, this.suggestionElement, {
        middleware: [
          offset(5),
          size({
            apply: ({ rects }) => {
              Object.assign(this.suggestionElement.style, {
                width: `${rects.reference.width}px`
              })
            }
          })
        ]
      }).then(({ x, y }) => {
        Object.assign(this.suggestionElement.style, {
          left: `${x}px`,
          top: `${y}px`
        })
      })
    })
    inputElement?.addEventListener('input', () => {
      const value = inputElement.value
      this.inputWrapElement.classList[value.length > 0 ? 'add' : 'remove'](this.inputWrapHaveWordsClassName)
    })
    inputElement?.addEventListener('input', debounce(() => {
      const value = inputElement.value
      this.handleQuerySuggestion(value)
    }, this.options.queryDelay))

    inputElement?.addEventListener('click', (e) => {
      if (this.suggestions.length > 0) {
        this.showSuggestion()
        return
      }
      const value = (<HTMLInputElement> e.target).value
      this.handleQuerySuggestion(value)
    })

    clickOutside(this.suggestionElement, () => {
      this.hideSuggestion()
    })

    this.suggestionElement.addEventListener('click', (e: MouseEvent) => {
      if ((<HTMLElement> e.target).closest('.suggestion')) {
        const labelElement = (<HTMLElement> e.target).closest('.suggestion')?.querySelector('.suggestion__label')
        const text = labelElement?.textContent || ''
        inputElement.value = text
        this.suggestions = []
        this.options.fetchCallback(text)
        this.hideSuggestion()
      }
    })

    this.inputClearElement = this.inputWrapElement.querySelector('.company-autocomplete__clear')
    if (this.inputClearElement) {
      this.inputClearElement?.addEventListener('click', () => {
        inputElement.value = ''
        this.inputWrapElement.classList.remove(this.inputWrapHaveWordsClassName)
      })
    }
  }

  private handleQuerySuggestion (value: string) {
    handleQueryData(this.options.api, value).then(data => {
      this.suggestions = data
      if (data.length === 0) {
        this.suggestionElement.innerHTML = ''
        this.hideSuggestion()
        return
      }
      const suggestionFragments: string[] = [
        '<div class="suggestion-popper__body">'
      ]
      data.forEach((item: CompanyDataType) => {
        suggestionFragments.push('<div class="suggestion">')
        suggestionFragments.push(`<div class="suggestion__avatar"><img data-suggestion-id="${item.id}" src="https://image.qcc.com/logo/${item.id}.jpg" alt="${item.name}"/></div>`)
        suggestionFragments.push(`<div class="suggestion__label">${item.name}</div>`)
        suggestionFragments.push('<div class="suggestion__extra"></div>')
        suggestionFragments.push('</div>')
      })
      suggestionFragments.push('</div>')
      suggestionFragments.push('<div class="suggestion-popper__footer">')
      suggestionFragments.push('</div>')
      this.suggestionElement.innerHTML = suggestionFragments.join('')

      this.suggestionElement.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function () {
          this.src = `https://image.qcc.com/auto/${this.dataset.suggestionId}.jpg`
        })
      })
      this.showSuggestion()
    })
  }

  private showSuggestion () {
    this.inputWrapElement.classList.add(this.inputWrapActivatedClassName)
    this.suggestionElement.classList.add(this.suggestionActivatedClassName)
  }

  private hideSuggestion () {
    this.inputWrapElement.classList.remove(this.inputWrapActivatedClassName)
    this.suggestionElement.classList.remove(this.suggestionActivatedClassName)
  }
}

export {
  CompanyAutocomplete
}
