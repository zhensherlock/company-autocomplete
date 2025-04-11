// import md5 from 'crypto-js/md5'
// import { splitArray } from './index'
//
// const passwordBooks = [
//   '9y16cxzg',
//   'sr2z1z63',
//   'hk2ssit3',
//   'acsevi4u',
//   'nu38i9ej',
//   '6m70kgre',
//   'hl8rvmhu',
//   '30uzkxp0',
//   'v9jggair',
//   '4ryav515',
//   'pgx6isvq',
//   '6b3zumy7',
//   'bxureygp',
//   'jff4xbhb',
//   '7j56lyfw',
//   '2tctuvza',
//   '8jfrswdr',
//   'r2as467y',
//   'jzye6ls1',
//   'bpi7fhat',
//   'ywp0p3qn',
//   'rzybga6p',
//   '84u199q5',
//   'kktjaqis',
//   'amn5oud8',
//   'a0zs4b52',
//   'x16y3u37',
//   'xku2lp9m',
//   'n8eawc7q',
//   'gw68xkfw',
//   '4wxtunev',
//   'ew2x6rzg',
//   'go9f3t54',
//   '7d0fkx5i',
//   'ai6ol58k',
//   '47jsslmm',
//   '70mxfzcz',
//   'b90wzl0c',
//   'ua78bvmr',
//   '7p60hdt4',
//   'ge5lw4u8',
//   'ref3rey2',
//   'wgay7vhx',
//   'b8l2u4mj',
//   'rk80y5ot',
//   'o37o4wq3',
//   '0moweoh0',
//   'r10m9bpy',
//   'wjilkjhj',
//   'il27pnod',
// ]
// const passwordBooksSplitResult = splitArray(passwordBooks, 5)
// const passwordVersion = 'v2.0'
// const BASE_HASH = 31
//
// export const getPasswordVersion = () => {
//   return passwordVersion
// }
//
// export const generateRandomString = (length: number): string => {
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//   return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('')
// }
//
// export const getPasswordBook = (key: string): string => {
//   const base = calculateHash(key) % passwordBooks.length
//   const index = Math.floor(base / 5)
//   return passwordBooksSplitResult[index][base % 5]
// }
//
// export const crypto = (data: string): string => {
//   return md5(data).toString()
// }
//
// export const calculateHash = (key: string): number => {
//   const result = (BASE_HASH + (key === null ? 0 : calculateCharHash(key))) | 0
//   return Math.abs(result)
// }
//
// export const calculateCharHash = (str: string): number => {
//   let result = 1
//   for (let i = 0; i < str.length; i++) {
//     result = (BASE_HASH * result + str.charCodeAt(i)) | 0
//   }
//   return result
// }
