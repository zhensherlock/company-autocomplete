import type {
  CompanyDataType,
  QccOpenAPIResponseType,
  ClearBitResponseType,
  CompanyAutocompleteOptions
} from '../types'
import { getSearchUrl } from '../utils'

export const handleQueryData = async (keyword: string, options: CompanyAutocompleteOptions) => {
  switch (options.api) {
    case 'qcc_open':
      return await queryQccOpenAPI(keyword, options)
    // case 'qcc':
    //   return await queryQccAPI(keyword, options)
    // case 'tianyancha':
    //   return await queryTianYanChaAPI(keyword, options)
    // case 'qixin':
    //   return await queryQiXinAPI(keyword, options)
    case 'clearbit':
      return await queryClearBitAPI(keyword, options)
    default:
      return []
  }
}

const queryQccOpenAPI = async (keyword: string, options: CompanyAutocompleteOptions): Promise<CompanyDataType[]> => {
  // console.log(keyword)
  if (keyword.length < 2) {
    return []
  }
  const searchUrl: string = 'https://c.qcc.com/embed/api/company/getCompanyName?searchKey={keyword}'
  const url = getSearchUrl(keyword, searchUrl, options.searchUrl)
  const res: Response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Referer: 'https://c.qcc.com/'
    }
  })
  const json = <QccOpenAPIResponseType> await res.json()
  // const json = {
  //   status: '200',
  //   result: [
  //     {
  //       companyName: '企查查科技有限公司',
  //       keyNo: 'f625a5b661058ba5082ca508f99ffe1b'
  //     },
  //     {
  //       companyName: '石狮市青创城电子商务园区有限责任公司',
  //       keyNo: 'af153062144625f2f82f1d2eae9bbe06'
  //     },
  //     {
  //       companyName: '上海东龙服饰有限公司',
  //       keyNo: '68d931176fdd2e44b229d8ff1f34652f'
  //     },
  //     {
  //       companyName: '深圳振强生物技术有限公司',
  //       keyNo: '106073d8ae22ce77d5159ce4cd657efc'
  //     },
  //     {
  //       companyName: '西安开天传动技术有限公司',
  //       keyNo: '36e4ed7802454db0df12a9cef26ea423'
  //     }
  //   ]
  // }
  const result: CompanyDataType[] = []
  if (json.status !== '200') {
    return result
  }
  return json.result.map(item => {
    return {
      name: item.companyName,
      id: item.keyNo
    }
  })
}

// const queryQccAPI = async (keyword: string, options: CompanyAutocompleteOptions): Promise<CompanyDataType[]> => {
//   if (keyword.length < 2) {
//     return []
//   }
//   // const searchUrl: string = 'https://acapi.zeabur.app/qcc/search/{keyword}'
//   const searchUrl: string = 'http://localhost:8081/qcc/search/{keyword}'
//   const url = getSearchUrl(keyword, searchUrl, options.searchUrl)
//   const res: Response = await fetch(url, {
//     method: 'GET',
//     mode: 'cors',
//     headers: {
//       Referer: 'https://www.qcc.com'
//     }
//   })
//   const json = <QccResponseType> await res.json()
//   const result: CompanyDataType[] = []
//   if (json.status !== '200') {
//     return result
//   }
//   return json.result.map(item => {
//     return {
//       name: item.name,
//       id: item.keyNo,
//       avatar: item.avatar
//     }
//   })
// }
//
// const queryTianYanChaAPI = async (keyword: string, options: CompanyAutocompleteOptions): Promise<CompanyDataType[]> => {
//   if (keyword.length < 2) {
//     return []
//   }
//   // const searchUrl: string = 'https://acapi.zeabur.app/qcc/search/{keyword}'
//   const searchUrl: string = 'http://localhost:8081/tyc/search/{keyword}'
//   const url = getSearchUrl(keyword, searchUrl, options.searchUrl)
//   const res: Response = await fetch(url, {
//     method: 'GET',
//     mode: 'cors'
//   })
//   const html = await res.text()
//   console.log(html)
//   return []
//   // const result: CompanyDataType[] = []
//   // if (json.status !== '200') {
//   //   return result
//   // }
//   // return json.result.map(item => {
//   //   return {
//   //     name: item.companyName,
//   //     id: item.keyNo
//   //   }
//   // })
// }

// const queryQiXinAPI = async (keyword: string, options: CompanyAutocompleteOptions): Promise<CompanyDataType[]> => {
//   if (keyword.length < 2) {
//     return []
//   }
//   const searchUrl: string = 'http://localhost:8081/qxb/search/{keyword}'
//   const url = getSearchUrl(keyword, searchUrl, options.searchUrl)
//   const res: Response = await fetch(url, {
//     method: 'GET',
//     mode: 'cors'
//   })
//   const html = await res.text()
//   console.log(html)
//   return []
// }

/**
 * ClearBitAPI
 * docs: https://dashboard.clearbit.com/docs?shell#autocomplete-api
 * @param keyword
 * @param options
 */
const queryClearBitAPI = async (keyword: string, options: CompanyAutocompleteOptions): Promise<CompanyDataType[]> => {
  if (keyword.length < 2) {
    return []
  }
  const searchUrl: string = 'https://autocomplete.clearbit.com/v1/companies/suggest?query={keyword}'
  const url = getSearchUrl(keyword, searchUrl, options.searchUrl)
  const res: Response = await fetch(url, {
    method: 'GET',
    mode: 'cors'
  })
  const json = <ClearBitResponseType[]> await res.json()
  return json.map(item => {
    return {
      name: item.name,
      id: item.domain,
      avatar: item.logo
    }
  })
}
