export function subArrayRanges(nums: number[]): number {
  const n = nums.length
  let ret = 0
  for (let i = 0; i < n; i++) {
    let minVal = Number.MAX_VALUE,
      maxVal = -Number.MAX_VALUE
    for (let j = i; j < n; j++) {
      minVal = Math.min(minVal, nums[j])
      maxVal = Math.max(maxVal, nums[j])
      ret += maxVal - minVal
    }
  }
  return ret
}
