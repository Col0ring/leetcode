// 暴力
export function maximizeXor(nums: number[], queries: number[][]): number[] {
  const ans = []
  // 将 nums 排序
  nums.sort((a, b) => a - b)

  for (let query of queries) {
    let max = -1
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > query[1]) {
        break
      }
      max = Math.max(max, query[0] ^ nums[i])
    }
    ans.push(max)
  }
  return ans
}
