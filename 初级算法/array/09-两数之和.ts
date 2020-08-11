export function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === need) {
        return [i, j]
      }
    }
  }
  return []
}
