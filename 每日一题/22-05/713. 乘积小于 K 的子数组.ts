export function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k === 0) {
    return 0
  }
  const n = nums.length
  const logPrefix: number[] = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    logPrefix[i + 1] = logPrefix[i] + Math.log(nums[i])
  }
  const logk = Math.log(k)
  let ret = 0
  for (let j = 0; j < n; j++) {
    let l = 0
    let r = j + 1
    let idx = j + 1
    const val = logPrefix[j + 1] - logk + 1e-10
    while (l <= r) {
      const mid = Math.floor((l + r) / 2)
      if (logPrefix[mid] > val) {
        idx = mid
        r = mid - 1
      } else {
        l = mid + 1
      }
    }
    ret += j + 1 - idx
  }
  return ret
}
