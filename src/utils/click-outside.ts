export const clickOutside = (elements: HTMLElement | HTMLElement[], callback: () => void): (() => void) => {
  const targets = Array.isArray(elements) ? elements : [elements]
  const handler = (event: MouseEvent) => {
    const target = event.target
    if (!(target instanceof Node)) {
      return
    }
    if (targets.every(element => !element.contains(target))) {
      callback()
    }
  }
  document.addEventListener('click', handler, true)
  return () => {
    document.removeEventListener('click', handler, true)
  }
}
