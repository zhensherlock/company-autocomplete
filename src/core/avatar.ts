import type { CompanyAutocompleteOptions } from '../types'
import { getAvatar } from '../utils'

export const handleAvatar = async (
  img: HTMLImageElement,
  options: CompanyAutocompleteOptions,
  signal?: AbortSignal,
): Promise<string> => {
  const id = img.dataset.id || ''
  if (!id || !options.avatarUrl) {
    return ''
  }
  const avatarUrl = await getAvatar(id, [options.avatarUrl], signal)
  if (avatarUrl) {
    img.src = avatarUrl
  }
  return avatarUrl
}
