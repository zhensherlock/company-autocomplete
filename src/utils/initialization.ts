import { CompanyAutocompleteOptions } from '../types'

export const initialOptions: CompanyAutocompleteOptions = {
  target: 'body',
  api: 'qcc_openapi',
  queryDelay: 500,
  placeholder: '请输入企业名称或统一社会信用代码',
  fetchCallback: () => {}
  // direction: 'ltr'
}
