export function truncateSentence(s: string, k: number): string {
  const n = s.length
  let end = 0,
    count = 0
  for (let i = 1; i <= n; i++) {
    if (i === n || s[i] === ' ') {
      count++
      if (count === k) {
        end = i
        break
      }
    }
  }
  return s.slice(0, end)
}
