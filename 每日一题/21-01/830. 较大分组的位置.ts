export function largeGroupPositions(s: string): number[][] {
  const ret: number[][] = []
  const n = s.length
  let num = 1
  for (let i = 0; i < n; i++) {
    if (i === n - 1 || s[i] !== s[i + 1]) {
      if (num >= 3) {
        ret.push([i - num + 1, i])
      }
      num = 1
    } else {
      num++
    }
  }
  return ret
}
