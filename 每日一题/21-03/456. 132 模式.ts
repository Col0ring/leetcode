export function find132pattern(nums: number[]): boolean {
  const n = nums.length
  const candidate_k = [nums[n - 1]]
  let max_k = -Number.MAX_SAFE_INTEGER

  for (let i = n - 2; i >= 0; --i) {
    if (nums[i] < max_k) {
      return true
    }
    while (
      candidate_k.length &&
      nums[i] > candidate_k[candidate_k.length - 1]
    ) {
      max_k = candidate_k[candidate_k.length - 1]
      candidate_k.pop()
    }
    if (nums[i] > max_k) {
      candidate_k.push(nums[i])
    }
  }
  return false
}
