export function numberOfLines(widths: number[], s: string): number[] {
  let lines = 1
  let width = 0
  for (let i = 0; i < s.length; i++) {
    const need = widths[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]
    width += need
    if (width > 100) {
      lines++
      width = need
    }
  }
  return [lines, width]
}
