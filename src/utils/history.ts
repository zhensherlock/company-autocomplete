import type { HistoryOptions, CompanyDataType } from '../types'
import { stringToJson } from './index'

const getStorage = (type: HistoryOptions['type']): Storage | undefined => {
  try {
    return type === 'localStorage' ? localStorage : sessionStorage
  } catch {
    return undefined
  }
}

const isCompanyData = (value: unknown): value is CompanyDataType => {
  if (!value || typeof value !== 'object') {
    return false
  }
  const item = value as Partial<CompanyDataType>
  return typeof item.name === 'string' && typeof item.id === 'string'
}

export const addHistory = (company: CompanyDataType, options: HistoryOptions) => {
  if (!options.enabled || !options.key) {
    return
  }
  const storage = getStorage(options.type)
  if (!storage) {
    return
  }
  const list = getHistory(options)
  const companyKey = company.id || company.name
  const index = list.findIndex(e => (e.id || e.name) === companyKey)
  if (index > -1) {
    list.splice(index, 1)
  }
  list.splice(0, 0, company)
  try {
    storage.setItem(options.key, JSON.stringify(list.length > 5 ? list.slice(0, 5) : list))
  } catch {
    // Ignore storage quota/security errors; history is an optional enhancement.
  }
}

export const getHistory = (options: HistoryOptions): CompanyDataType[] => {
  if (!options.enabled || !options.key) {
    return []
  }
  const storage = getStorage(options.type)
  if (!storage) {
    return []
  }
  try {
    const content = storage.getItem(options.key) || ''
    return stringToJson<CompanyDataType>(content).filter(isCompanyData)
  } catch {
    return []
  }
}

export const removeHistory = (options: HistoryOptions) => {
  const storage = getStorage(options.type)
  if (!storage) {
    return
  }
  try {
    storage.removeItem(options.key)
  } catch {
    // Ignore storage quota/security errors; history is an optional enhancement.
  }
}
