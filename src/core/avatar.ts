import type { CompanyAutocompleteOptions } from '../types'
import { getAvatar } from '../utils'

const qccAvatarUrls: string[] = [
  'https://image.qcc.com/logo/{id}.jpg',
  'https://image.qcc.com/auto/{id}.jpg'
]

export const handleAvatar = async (img: HTMLImageElement, options: CompanyAutocompleteOptions) => {
  const id = img.dataset.id || ''
  if (options.avatarUrl) {
    img.src = await getAvatar(id, [options.avatarUrl])
    return
  }
  switch (options.api) {
    case 'qcc_open':
      img.src = await getAvatar(id, qccAvatarUrls)
      break
  }
}
