export function convert(s: string, numRows: number): string {
  if (numRows === 0) {
    return ''
  } else if (numRows === 1) {
    return s
  }
  const res: string[] = []
  let desc = false
  let index = 0
  const len = s.length
  for (let i = 0; i < len; i++) {
    res[index] = res[index] ? res[index] + s[i] : s[i]
    if (index % (numRows - 1) === 0) {
      desc = !desc
    }
    index = desc ? index + 1 : index - 1
  }
  return res.join('')
}
