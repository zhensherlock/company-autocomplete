export const isString = (value: any): boolean => {
  return typeof value === 'string'
}

// export const debounce = (fn: Function, ms = 0) => {
//   let timeoutId: any
//   return function (...args: any[]) {
//     clearTimeout(timeoutId)
//     timeoutId = setTimeout(() => fn.apply(this, args), ms)
//   }
// }
