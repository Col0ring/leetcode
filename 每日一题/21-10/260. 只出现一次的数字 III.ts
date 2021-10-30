export function singleNumber(nums: number[]): number[] {
  const map = new Map<number, number>()
  const n = nums.length
  for (let i = 0; i < n; i++) {
    const num = nums[i]
    if (map.has(num)) {
      map.delete(num)
    } else {
      map.set(num, 1)
    }
  }

  return [...map.keys()]
}
