export function permuteUnique(nums: number[]): number[][] {
  const ans: number[][] = []
  const len = nums.length
  const vis = new Array(nums.length).fill(false)
  nums.sort((a, b) => a - b)
  const dfs = (idx: number, arr: number[]): void => {
    if (idx === len) {
      ans.push([...arr])
      return
    }
    for (let i = 0; i < len; ++i) {
      // 这个右边是判断从左往右第一个未被填过的数字，在同样的集合中如果前一个没被填入，第二个不能填，这样用来减少重复数字的判断
      if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
        continue
      }
      // 回溯
      arr.push(nums[i])
      vis[i] = true
      dfs(idx + 1, arr)
      vis[i] = false
      arr.pop()
    }
  }
  dfs(0, [])
  return ans
}
