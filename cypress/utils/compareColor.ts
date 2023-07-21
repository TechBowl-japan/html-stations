const kRegexColorHex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/
const kRegexColorRgb = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/
const kRegexColorRgba = /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d+)\)$/

const parseColor = (color: string): number => {
  if (kRegexColorHex.test(color)) {
    return parseInt(color.slice(1), 16)
  } else if (kRegexColorRgb.test(color)) {
    const [, r, g, b] = color.match(kRegexColorRgb)!

    return (parseInt(r) << 16) | (parseInt(g) << 8) | parseInt(b)
  } else if (kRegexColorRgba.test(color)) {
    const [, r, g, b] = color.match(kRegexColorRgba)!
    return (parseInt(r) << 16) | (parseInt(g) << 8) | parseInt(b)
  }
}

/**
 * Compares two colors. Requires DOM.
 *
 * @param a A color.
 * @param b Another color.
 * @returns True when the `a` and `b` is identical.
 */
export const compareColor = (a: string, b: string): boolean => {
  return parseColor(a) === parseColor(b)
}
