export type ApiType = 'clearbit'

export type HistoryType = 'localStorage' | 'sessionStorage'

export interface HistoryOptions {
  /**
   * history enabled
   */
  enabled: boolean
  /**
   * history save mode
   */
  type: HistoryType
  /**
   * history save key
   */
  key: string
  /**
   * show clear history link
   */
  showClear: boolean
  /**
   * history item icon
   */
  itemIcon: string
  /**
   * clear history link icon
   */
  clearIcon: string
}

export interface CompanyAutocompleteOptions {
  /**
   * id of the html element tag
   */
  target: Element | string
  /**
   * query data source
   */
  api: ApiType
  /**
   *  query data delay
   */
  queryDelay: number
  /**
   * input placeholder content
   */
  placeholder: string
  /**
   * show clear button
   */
  clearable: boolean
  /**
   * if backFill selected item the input when using keyboard
   */
  backFill: boolean
  /**
   * whether to append the popup menu to body.
   */
  popupAppendToBody: boolean
  /**
   * clear icon
   */
  clearIcon: string
  /**
   * auto focus
   */
  autoFocus: boolean
  /**
   * Called when searching items
   */
  onFetch: (data: CompanyDataType[], keyword: string) => void
  /**
   * Called when an option is selected. param is option's value
   */
  onSelect: (company?: CompanyDataType) => void
  /**
   * Called when clear
   */
  onClear: () => void
  /**
   * Called when entering the component
   */
  onFocus: () => void
  /**
   * Called when leaving the component
   */
  onBlur: () => void
  /**
   * Call when dropdown open
   */
  onDropdownVisibleChange: (visible: boolean) => void
  /**
   * avatar url
   */
  avatarUrl?: string
  /**
   * pixels to offset from input bottom
   */
  offsetTop: number
  /**
   * auto flip
   */
  autoFlip: boolean
  /**
   * history
   */
  history: HistoryOptions
  /**
   * show submit button
   */
  showSubmitButton: boolean
  /**
   * submit button label
   */
  submitButtonLabel: string
  /**
   * submit callback
   */
  submitCallback: (payload: CompanyAutocompleteSubmitPayload) => void
}

export type CompanyAutocompleteUserOptions = Partial<Omit<CompanyAutocompleteOptions, 'history'>> & {
  history?: Partial<HistoryOptions>
}

export interface CompanyAutocompleteSubmitPayload {
  /**
   * selected company
   */
  company?: CompanyDataType
  /**
   * input text
   */
  text: string
}

export interface CompanyDataType {
  /**
   * company name
   */
  name: string
  /**
   * company id
   */
  id: string
  /**
   * company avatar
   */
  avatar?: string
}

export interface ClearBitResponseType {
  name?: string
  logo?: string
  domain?: string
}
