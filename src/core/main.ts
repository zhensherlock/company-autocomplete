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
    console.log(this.target)
  }

  async create () {
  }
}
