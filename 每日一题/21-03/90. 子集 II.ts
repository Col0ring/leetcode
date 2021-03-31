export function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)
  let t: number[] = [],
    ans: number[][] = []
  const n = nums.length
  for (let mask = 0; mask < 1 << n; ++mask) {
    t = []
    let flag = true
    for (let i = 0; i < n; ++i) {
      if ((mask & (1 << i)) != 0) {
        if (i > 0 && ((mask >> (i - 1)) & 1) == 0 && nums[i] == nums[i - 1]) {
          flag = false
          break
        }
        t.push(nums[i])
      }
    }
    if (flag) {
      ans.push(t.slice())
    }
  }
  return ans
}
