export function repeatedNTimes(nums: number[]): number {
  const found = new Set<number>()
  for (const num of nums) {
    if (found.has(num)) {
      return num
    }
    found.add(num)
  }
  // 不可能的情况
  return -1
}
