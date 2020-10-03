export function twoSum(nums: number[], target: number): number[] {
  const arr: number[] = []
  for (let i = 0; i < nums.length; i++) {
    const completeNum = target - nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === completeNum) {
        arr[0] = i
        arr[1] = j
        return arr
      }
    }
  }
  return arr
}
