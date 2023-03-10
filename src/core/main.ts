import { CompanyAutocompleteOptions } from '../types'
import { initialOptions } from '../utils/initialization'
import { isString } from '../utils'
import { debounce } from '../utils/throttle'

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
    input?.addEventListener('input', debounce((e) => {
      console.log(e)
      // @ts-ignore
      fetch(`https://c.qcc.com/embed/api/company/getCompanyName?searchKey=${e.target?.value}`, {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-language': 'zh-CN,zh;q=0.9',
          'cache-control': 'no-cache',
          pragma: 'no-cache',
          'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin'
        },
        referrer: 'https://c.qcc.com/',
        referrerPolicy: 'strict-origin-when-cross-origin',
        body: null,
        method: 'GET',
        mode: 'cors',
        credentials: 'include'
      })
    }, 500))
  }
}
