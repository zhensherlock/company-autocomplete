import md5 from 'crypto-js/md5'

const passwordBooks = ['zzcscp7g', 'e6i8jtbl', 'eux6on67', 'h17dd8cq', 'b1ur65ky', 'ktzcn5bw', 'xtya6q26', 'g6fr429c', '50kks7sc', 'r71x7c6u', 'odouivjk', 'rsi9vpqy', 'kj6rksdy', '27w45dme', 'a769pvn7', 'ns84opu3', 'jdl9qs00', 'ogzjpunb', 'lo93uuin', 'yhlx8e4p', '6t6kpahe', 'v122ogxz', '46a0bnjx', 'eqnfjp7b', 't4b7pon5', 'xhgb7dcl', 'ydhoswq0', 'gy4ubl0w', 'bgvxuf71', 'ityjfac8', 'lbati1a4', 'wo5j9npq', 'jor1dbu5', 'aha53e8e', 'ei3y8a8f', 'pbc3rtvb', 'sc1ghnvh', '3ng27uhh', '4hl15zxr', '8fpxxpgy', 'cieadu1u', 'va7m26gv', 'h39vz873', 'nliabzs6', '24xvriaf', 'tyobyhea', 'k4y0tp6d', 'rqwft3lw', 'y7g10qjh', '5xpqdylr']
const passwordVersion = 'v1.0'
const PRIME = 31

export const getPasswordVersion = () => {
  return passwordVersion
}

export const generateUUID = (sectionLength: number, keyLength: number, separator: string): string => {
  const keys = []
  for (let i = 0; i < sectionLength; i++) {
    keys.push(generateRandomString(keyLength))
  }
  return keys.join(separator)
}

export const generateRandomString = (length: number): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('')
}

export const getPasswordBook = (key: string): string => {
  const index = calculateHash(key) % passwordBooks.length
  return passwordBooks[index]
}

// export const calculateChecksum = (params: string, methodName: string, keySalt: string): string => {
//   return calculateMD5(methodName + params + keySalt)
// }
//
// export const calculateMD5 = (data: string): string => {
//   return MD5(data).toString()
// }

export const crypto = (data: string): string => {
  return md5(data).toString()
}

export const calculateHash = (...objects: string[]): number => {
  let hash = 1
  for (const obj of objects) {
    hash = (((PRIME * hash)) + (obj === null ? 0 : calculateCharHash(obj))) | 0
  }
  return Math.abs(hash)
}

export const calculateCharHash = (str: string): number => {
  let hash = 1
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i)
    hash = (hash * PRIME + charCode) | 0
  }
  return hash
}
