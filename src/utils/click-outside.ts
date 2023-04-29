export const clickOutside = (element: HTMLElement, callback: () => void) => {
  let clicked = false
  document.addEventListener('click', (event) => {
    if (!element.contains(<Node> event.target) && !clicked) {
      callback()
    }
    clicked = element.contains(<Node> event.target)
  }, true)
}
