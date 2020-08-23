export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; i++) {
      if (nums[i] === nums[j] && j - i <= k) {
        return true
      }
    }
  }
  return false
}
