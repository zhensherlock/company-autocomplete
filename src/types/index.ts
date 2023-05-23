export type ApiType = 'qcc_openapi' | 'qcc_api' | 'qixin_api' | 'tianyancha_api'

export type LayoutDirection = 'ltr' | 'rtl'

export interface CompanyAutocompleteOptions {
  /**
   * id of the html element tag
   */
  target: Element | string;
  /**
   * query data source
   */
  api: ApiType;
  /**
   *  query data delay
   */
  queryDelay: number;
  /**
   * input placeholder content
   */
  placeholder: string;
  /**
   * show clear button
   */
  clearable: Boolean;
  /**
   * clear icon
   */
  clearIcon: string;
  /**
   * auto focus
   */
  autoFocus: Boolean;
  /**
   * fetch api event
   */
  onFetch: Function;
  /**
   * select company event
   */
  onSelect: Function;
  /**
   * input clear event
   */
  onClear: Function;
  /**
   * search query api url
   */
  searchUrl?: string;
  /**
   * avatar url
   */
  avatarUrl?: string;
  /**
   * pixels to offset from input bottom
   */
  offsetTop: number;
  /**
   * auto flip
   */
  autoFlip: boolean;
  /**
   * show submit button
   */
  showSubmitButton: boolean;
  /**
   * submit button label
   */
  submitButtonLabel: string;
  /**
   * submit callback
   */
  submitCallback: Function;
  /**
   * set direction of layout
   */
  // direction: LayoutDirection;
}

export interface CompanyDataType {
  /**
   * company name
   */
  name: String;
  /**
   * company id
   */
  id: String;
  /**
   * company avatar
   */
  avatar?: String;
}

export interface QccOpenAPIResponseType {
  status: string;
  msg: string;
  traceNo: string;
  token: null;
  result: {
    companyName: string;
    keyNo: string;
  }[];
}
