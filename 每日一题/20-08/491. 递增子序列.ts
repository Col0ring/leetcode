// dfs
export function findSubsequences(nums: number[]): number[][] {
  const setHelper = new Set<string>()
  const dfs = (start: number, paths: number[]) => {
    if (start >= nums.length) return
    // 从start开始找  不小于当前path末尾的树，进下一层
    for (let i = start; i < nums.length; i++) {
      if (paths.length === 0 || nums[i] >= paths[paths.length - 1]) {
        paths.push(nums[i])
        // 中途碰上的长度>=2 的路径都算上
        if (paths.length >= 2) {
          // 不能推入数组，因为内存不一样 Set 无法区分
          setHelper.add(paths.join(','))
        }
        dfs(i + 1, paths)
        // 比如path.length是2，会先将上一个dfs的遍历完后把倒数第一个去除，然后直接推入第三个
        paths.pop()
      }
    }
  }
  dfs(0, [])
  return [...setHelper].map((item) => item.split(',').map((str) => +str))
}
