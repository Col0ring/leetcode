export function maxDepth(s: string): number {
  let ans = 0,
    size = 0
  for (let i = 0; i < s.length; ++i) {
    const ch = s[i]
    if (ch === '(') {
      ++size
      ans = Math.max(ans, size)
    } else if (ch === ')') {
      --size
    }
  }
  return ans
}
