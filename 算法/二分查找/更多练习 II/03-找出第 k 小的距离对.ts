export function smallestDistancePair(nums: number[], k: number): number {
  nums.sort((a, b) => a - b)
  let lo = 0
  let hi = nums[nums.length - 1] - nums[0]
  while (lo < hi) {
    const mi = (lo + hi) >> 1
    let count = 0,
      left = 0
    for (let right = 0; right < nums.length; ++right) {
      while (nums[right] - nums[left] > mi) left++
      count += right - left
    }
    //count = number of pairs with distance <= mi
    if (count >= k) hi = mi
    else lo = mi + 1
  }
  return lo
}
