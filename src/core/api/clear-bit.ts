import type { ClearBitResponseType, CompanyDataType } from '../../types'

export const queryClearBitAPI = async (keyword: string): Promise<CompanyDataType[]> => {
  if (keyword.length < 2 || keyword.length >= 100) {
    return []
  }
  const url: string = `https://autocomplete.clearbit.com/v1/companies/suggest?query=${keyword}`
  const res: Response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
  })
  const json = <ClearBitResponseType[]>await res.json()
  return json.map(item => {
    return {
      name: item.name,
      id: item.domain,
      avatar: item.logo,
    }
  })
}
