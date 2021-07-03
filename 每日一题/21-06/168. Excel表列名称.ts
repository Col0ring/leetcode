export function convertToTitle(columnNumber: number): string {
  let ans: string[] = []
  while (columnNumber > 0) {
    const a0 = ((columnNumber - 1) % 26) + 1
    ans.push(String.fromCharCode(a0 - 1 + 'A'.charCodeAt(0)))
    columnNumber = Math.floor((columnNumber - a0) / 26)
  }
  ans.reverse()
  return ans.join('')
}
