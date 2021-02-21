export function longestSubarray(nums: number[], limit: number): number {
  const queMax: number[] = []
  const queMin: number[] = []
  const n = nums.length
  let left = 0,
    right = 0
  let ret = 0
  while (right < n) {
    while (queMax.length && queMax[queMax.length - 1] < nums[right]) {
      queMax.pop()
    }
    while (queMin.length && queMin[queMin.length - 1] > nums[right]) {
      queMin.pop()
    }
    queMax.push(nums[right])
    queMin.push(nums[right])
    while (queMax.length && queMin.length && queMax[0] - queMin[0] > limit) {
      if (nums[left] === queMin[0]) {
        queMin.shift()
      }
      if (nums[left] === queMax[0]) {
        queMax.shift()
      }
      left++
    }
    ret = Math.max(ret, right - left + 1)
    right++
  }
  return ret
}
