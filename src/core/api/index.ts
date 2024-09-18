import type { CompanyAutocompleteOptions } from '../../types'
// import { queryQccOpenAPI } from './qcc-open'
import { queryClearBitAPI } from './clear-bit'
// import { queryQccGlobalAPI } from './qcc-global'

export const handleQueryData = async (keyword: string, options: CompanyAutocompleteOptions) => {
  switch (options.api) {
    // case 'qcc_open':
    //   return await queryQccOpenAPI(keyword)
    // case 'qcc_global':
    //   return await queryQccGlobalAPI(keyword)
    case 'clearbit':
      return await queryClearBitAPI(keyword)
    default:
      return []
  }
}
