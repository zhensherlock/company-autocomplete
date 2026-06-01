import type { CompanyAutocompleteOptions } from '../../types'
import { queryClearBitAPI } from './clear-bit'

export const handleQueryData = async (keyword: string, options: CompanyAutocompleteOptions, signal?: AbortSignal) => {
  switch (options.api) {
    case 'clearbit':
      return await queryClearBitAPI(keyword, signal)
    default:
      return []
  }
}
