export const isString = (value: unknown): value is string => {
  return typeof value === 'string'
}

export const getSearchUrl = (keyword: string, defaultUrl: string, customUrl?: string) => {
  const url = customUrl || defaultUrl
  return replaceAll(url, '{keyword}', encodeURIComponent(keyword))
}

export const getAvatar = async (id: string, urls: string[], signal?: AbortSignal) => {
  for (const url of urls) {
    try {
      const truthUrl = replaceAll(url, '{id}', encodeURIComponent(id))
      const response = await fetch(truthUrl, { signal })
      if (response.ok) {
        const blob = await response.blob()
        return URL.createObjectURL(blob)
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        throw error
      }
      console.error(error)
    }
  }
  return ''
}

export const replaceAll = (str: string, find: string, replace: string) => {
  return str.split(find).join(replace)
}

export const getSiblings = (element: HTMLElement): HTMLElement[] => {
  const siblings = Array.from(element.parentNode ? element.parentNode.children : [])
  return siblings.filter(sibling => sibling !== element) as HTMLElement[]
}

export const setSuggestionItemClass = (suggestions: HTMLElement[], index: number, className: string) => {
  suggestions.forEach(item => {
    item.classList.remove(className)
    item.setAttribute('aria-selected', 'false')
  })
  suggestions[index]?.classList.add(className)
  suggestions[index]?.setAttribute('aria-selected', 'true')
}

export const removeHtmlTags = (str: string): string => {
  return str.replace(/(<([^>]+)>)/gi, '')
}

export const stringToJson = <T = unknown>(str: string): T[] => {
  try {
    const result = JSON.parse(str)
    if (Array.isArray(result)) {
      return result
    } else {
      return []
    }
  } catch {
    return []
  }
}

export const objectToQueryString = (object: Record<string, string | number | boolean>, prefix = '') => {
  const params = new URLSearchParams()
  Object.keys(object).forEach(key => {
    params.set(key, String(object[key]))
  })
  return prefix + params.toString()
}

export const splitArray = <T>(arr: T[], size: number): T[][] => {
  if (size <= 0) {
    return []
  }
  const result: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}
