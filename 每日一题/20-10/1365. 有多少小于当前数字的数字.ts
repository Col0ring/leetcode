export function smallerNumbersThanCurrent(nums: number[]): number[] {
  const n = nums.length
  const ans: number[] = []
  for (let i = 0; i < n; ++i) {
    let cnt = 0
    for (let j = 0; j < n; ++j) {
      if (nums[j] < nums[i]) {
        cnt++
      }
    }
    ans[i] = cnt
  }
  return ans
}
