import type { CompanyDataType, QccOpenAPIResponseType } from '../../types'
import { generateRandomString, getPasswordBook, getPasswordVersion, crypto } from '../../utils/security'
import { objectToQueryString } from '../../utils'

const handleQueryUrl = (keyword: string) => {
  const params = {
    f: generateRandomString(5),
    g: generateRandomString(3),
    r: '/company/getCompanyName',
    searchKey: keyword,
    t: Math.floor(Date.now() / 1e3),
    v: getPasswordVersion()
  }

  const queryString = objectToQueryString(params)
  const passwordBook = getPasswordBook(params.r.toUpperCase() + queryString)
  const m = crypto(`GET${queryString}${passwordBook}`)
  return `https://c.qcc.com/embed/api${params.r}?${queryString}&m=${m}`
}

export const queryQccOpenAPI = async (keyword: string): Promise<CompanyDataType[]> => {
  if (keyword.length < 2 || keyword.length > 100) {
    return []
  }

  const url = handleQueryUrl(keyword)
  const res: Response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Referer: 'https://c.qcc.com/'
    }
  })
  const json = <QccOpenAPIResponseType> await res.json()
  const result: CompanyDataType[] = []
  if (json.status !== '200') {
    return result
  }
  return json.result.map((item) => {
    return {
      name: item.companyName,
      id: item.keyNo
    }
  })
}
