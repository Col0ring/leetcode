export function deleteAndEarn(nums: number[]): number {
  let maxVal = 0
  for (const val of nums) {
    maxVal = Math.max(maxVal, val)
  }
  const sum: number[] = new Array(maxVal + 1).fill(0)
  for (const val of nums) {
    sum[val] += val
  }
  return rob(sum)
}

const rob = (nums: number[]) => {
  const size = nums.length
  let first = nums[0],
    second = Math.max(nums[0], nums[1])
  for (let i = 2; i < size; i++) {
    let temp = second
    second = Math.max(first + nums[i], second)
    first = temp
  }
  return second
}
