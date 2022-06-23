/**
 * Compares two colors. Requires DOM.
 *
 * @param a A color.
 * @param b Another color.
 * @returns True when the `a` and `b` is identical.
 */
export const compareColor = (a: string, b: string): boolean => {
  const elm = document.createElement('div')
  elm.style.color = a
  elm.style.backgroundColor = b
  elm.style.display = 'none'

  document.body.appendChild(elm)

  const computedStyle = window.getComputedStyle(elm)
  const res = computedStyle.backgroundColor === computedStyle.color

  document.body.removeChild(elm)

  return res
}
