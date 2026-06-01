import type { ClearBitResponseType, CompanyDataType } from '../../types'

export const queryClearBitAPI = async (keyword: string, signal?: AbortSignal): Promise<CompanyDataType[]> => {
  if (keyword.length < 2 || keyword.length >= 100) {
    return []
  }
  const url = new URL('https://autocomplete.clearbit.com/v1/companies/suggest')
  url.searchParams.set('query', keyword)
  const res: Response = await fetch(url.toString(), {
    method: 'GET',
    mode: 'cors',
    signal,
  })
  if (!res.ok) {
    return []
  }
  const json = (await res.json()) as unknown
  if (!Array.isArray(json)) {
    return []
  }
  return json.flatMap((item: ClearBitResponseType) => {
    if (!item.name) {
      return []
    }
    return {
      name: item.name,
      id: item.domain || item.name,
      avatar: item.logo,
    }
  })
}
