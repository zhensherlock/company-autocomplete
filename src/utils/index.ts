export const isString = (value: any): boolean => {
  return typeof value === 'string'
}

export const getSearchUrl = (keyword: string, defaultUrl: string, customUrl?: string) => {
  const url = customUrl || defaultUrl
  return replaceAll(url, '{keyword}', keyword)
}

export const getAvatar = async (id: string, urls: string[]) => {
  for (const url of urls) {
    try {
      const truthUrl = replaceAll(url, '{id}', id)
      const response = await fetch(truthUrl)
      if (response.status === 200) {
        const blob = await response.blob()
        return URL.createObjectURL(blob)
      }
    } catch (error) {
      console.error(error)
    }
  }
  return ''
}

export const replaceAll = (str: string, find: string, replace: string) => {
  return str.replace(new RegExp(find, 'g'), replace)
}

// export const debounce = (fn: Function, ms = 0) => {
//   let timeoutId: any
//   return function (...args: any[]) {
//     clearTimeout(timeoutId)
//     timeoutId = setTimeout(() => fn.apply(this, args), ms)
//   }
// }
