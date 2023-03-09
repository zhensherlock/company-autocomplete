import { CompanyAutocompleteOptions } from '../types'
import { initialOptions } from '../utils/initialization'
import { isString } from '../utils'

export default class CompanyAutocomplete {
  private readonly options: CompanyAutocompleteOptions
  private readonly target: Element | null

  constructor (args: Partial<CompanyAutocompleteOptions> = {}) {
    this.options = Object.assign({}, initialOptions, args)
    if (isString(this.options.target)) {
      this.target = document.querySelector(<string> this.options.target)
    } else {
      this.target = <Element> this.options.target
    }
    this.drawContainer()
  }

  async create () {
  }

  private drawContainer () {
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
    const input = document.querySelector('.company-autocomplete__input input')
    input?.addEventListener('input', () => {
      console.log('input')
    })
  }
}
