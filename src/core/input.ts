import { CompanyAutocompleteOptions } from '../types'
import { initialOptions } from '../utils/initialization'
import { isString } from '../utils'
import { debounce } from '../utils/throttle'
import { handleQueryData } from './api'
import { computePosition, autoUpdate, size } from '@floating-ui/dom'
import { clickOutside } from '../utils/click-outside'

class CompanyAutocomplete {
  private readonly options: CompanyAutocompleteOptions
  private readonly target: Element | null

  constructor (args: Partial<CompanyAutocompleteOptions> = {}) {
    this.options = Object.assign({}, initialOptions, args)
    if (isString(this.options.target)) {
      this.target = document.querySelector(<string> this.options.target)
    } else {
      this.target = <Element> this.options.target
    }
    this.render()
  }

  async create () {
  }

  private render (): void {
    if (!this.target) {
      return
    }
    // innerHTML数组方式 > createElement方式 > innerHTML字符串拼接方式
    const fragments = [
      '<div class="company-autocomplete">',
      '<div class="company-autocomplete__input">',
      '<input type="text" />',
      '</div>',
      '</div>'
    ]
    this.target.innerHTML = fragments.join('')
    const suggestionElement = document.createElement('div')
    suggestionElement.classList.add('suggestion-popper')
    suggestionElement.innerHTML = ''
    document.body.appendChild(suggestionElement)
    const inputElement = <HTMLElement> this.target
    autoUpdate(inputElement, suggestionElement, () => {
      computePosition(inputElement, suggestionElement, {
        middleware: [
          size({
            apply ({ rects }) {
              Object.assign(suggestionElement.style, {
                width: `${rects.reference.width}px`
              })
            }
          })
        ]
      }).then(({ x, y }) => {
        Object.assign(suggestionElement.style, {
          left: `${x}px`,
          top: `${y}px`
        })
      })
    })
    inputElement?.addEventListener('input', debounce((e) => {
      const value = (<HTMLInputElement> e.target).value
      handleQueryData(this.options.api, value).then(data => {
        if (data.length === 0) {
          suggestionElement.innerHTML = ''
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
        suggestionElement.innerHTML = suggestionFragments.join('')
      })
    }, this.options.queryDelay))

    inputElement.querySelector('input')?.addEventListener('click', () => {
      suggestionElement.classList.add('suggestion-popper--activated')
    })

    clickOutside(suggestionElement, () => {
      suggestionElement.classList.remove('suggestion-popper--activated')
    })
  }
}

export {
  CompanyAutocomplete
}
