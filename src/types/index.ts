export type ApiType = 'qcc_openapi' | 'qcc_api' | 'qixin_api' | 'tianyancha_api'

export interface CompanyAutocompleteOptions {
  target: Element | string;
  api: ApiType;
}

export interface CompanyModelOptions {
  name: String;
  keyNo: String;
  avatar?: String;
}
