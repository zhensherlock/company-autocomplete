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
  private inputWrapElement: HTMLElement = document.createElement('div')

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
      '</div>'
    ]
    this.target.innerHTML = fragments.join('')
    this.suggestionElement.classList.add('suggestion-popper')
    this.suggestionElement.innerHTML = ''
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
    inputElement?.addEventListener('input', debounce((e) => {
      const value = (<HTMLInputElement> e.target).value
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
      data.forEach(item => {
        suggestionFragments.push('<div class="suggestion">')
        suggestionFragments.push('<div class="suggestion__avatar"></div>')
        suggestionFragments.push(`<div class="suggestion__label">${item.name}</div>`)
        suggestionFragments.push('<div class="suggestion__extra"></div>')
        suggestionFragments.push('</div>')
      })
      suggestionFragments.push('</div>')
      suggestionFragments.push('<div class="suggestion-popper__footer">')
      suggestionFragments.push('</div>')
      this.suggestionElement.innerHTML = suggestionFragments.join('')
      this.showSuggestion()
    })
  }

  private showSuggestion () {
    this.inputWrapElement.classList.add('company-autocomplete--activated')
    this.suggestionElement.classList.add('suggestion-popper--activated')
  }

  private hideSuggestion () {
    this.inputWrapElement.classList.remove('company-autocomplete--activated')
    this.suggestionElement.classList.remove('suggestion-popper--activated')
  }
}

export {
  CompanyAutocomplete
}
