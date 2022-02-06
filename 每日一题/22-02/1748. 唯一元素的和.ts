export function sumOfUnique(nums: number[]): number {
  const cnt = new Map<number, number>()
  for (const num of nums) {
    cnt.set(num, (cnt.get(num) || 0) + 1)
  }
  let ans = 0
  for (const [num, c] of cnt.entries()) {
    if (c === 1) {
      ans += num
    }
  }
  return ans
}
