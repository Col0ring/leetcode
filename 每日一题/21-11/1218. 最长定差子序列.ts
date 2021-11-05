export function longestSubsequence(arr: number[], difference: number): number {
  let ans = 0
  const dp = new Map<number, number>()
  for (const v of arr) {
    dp.set(v, (dp.get(v - difference) || 0) + 1)
    ans = Math.max(ans, dp.get(v)!)
  }
  return ans
}
