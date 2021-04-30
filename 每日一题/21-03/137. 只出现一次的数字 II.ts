export function singleNumber(nums: number[]): number {
  const freq = new Map<number, number>()
  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1)
  }
  let ans = 0
  for (const [num, occ] of freq.entries()) {
    if (occ === 1) {
      ans = num
      break
    }
  }
  return ans
}
