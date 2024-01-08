import type { QccGlobalAPIResponseType, CompanyDataType } from '../../types'

export const queryQccGlobalAPI = async (keyword: string): Promise<CompanyDataType[]> => {
  if (keyword.length < 2 || keyword.length >= 100) {
    return []
  }
  const url: string = `https://company-autocomplete-api.vercel.app/qcc-global/search/${keyword}`
  const res: Response = await fetch(url, {
    method: 'GET',
    mode: 'cors'
  })
  const json = <QccGlobalAPIResponseType> await res.json()
  return json.resultList.map((item) => {
    return {
      name: item.name,
      id: item.keyNo,
      avatar: item.imgUrl
    }
  })
}
