export type ApiType = 'qcc_open' | 'qcc' | 'qixin' | 'tianyancha'

export type HistoryType = 'localStorage' | 'sessionStorage'

export type LayoutDirection = 'ltr' | 'rtl'

export interface HistoryOptions {
  /**
   * history enabled
   */
  enabled: boolean;
  /**
   * history save mode
   */
  type: HistoryType;
  /**
   * history save key
   */
  key: string,
  /**
   * show clear history link
   */
  showClear: boolean;
  /**
   * history item icon
   */
  itemIcon: string;
  /**
   * clear history link icon
   */
  clearIcon: string;
}

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
   * if backFill selected item the input when using keyboard
   */
  backFill: boolean;
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
   * history
   */
  history: HistoryOptions;
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
  name: string;
  /**
   * company id
   */
  id: string;
  /**
   * company avatar
   */
  avatar?: string;
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

export interface QccResponseType {
  status: string;
  result: {
    name: string;
    keyNo: string;
    avatar: string;
  }[];
}
