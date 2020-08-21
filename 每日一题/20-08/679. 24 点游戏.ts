function judgePoint24(nums: number[]): boolean {
  const helper = (prev: number, index: number): number[] => {
    if (index === nums.length) {
      return [prev]
    }
    let res = []
    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) {
        continue
      }
      const temp: number[][] = []
      visited[i] = true
      // 8种运算情况
      temp[0] = helper(nums[i], index + 1)
      temp[1] = helper(prev + nums[i], index + 1)
      temp[2] = helper(nums[i], index + 1)
      temp[3] = helper(prev - nums[i], index + 1)
      temp[4] = helper(nums[i], index + 1)
      temp[5] = helper(prev * nums[i], index + 1)
      temp[6] = helper(nums[i], index + 1)
      temp[7] = helper(prev / nums[i], index + 1)
      /*
        temp[0] = prev + helper(nums[i], index + 1)
        temp[1] = helper(prev + nums[i], index + 1)
        temp[2] = prev - helper(nums[i], index + 1)
        temp[3] = helper(prev - nums[i], index + 1)
        temp[4] = prev * helper(nums[i], index + 1)
        temp[5] = helper(prev * nums[i], index + 1)
        temp[6] = prev / helper(nums[i], index + 1)
        temp[7] = helper(prev / nums[i], index + 1)
     */

      visited[i] = false
      for (let j = 0; j < temp.length; j++) {
        // 8 种运算情况的结果数组（递归）
        for (let k = 0; k < temp[j].length; k++) {
          // 每个结果依次和前面的结果进行四则运算
          switch (j) {
            case 0:
              temp[0][k] = prev + temp[0][k]
              break
            case 2:
              temp[2][k] = prev - temp[2][k]
              break
            case 4:
              temp[4][k] = prev * temp[4][k]
              break
            case 6:
              temp[6][k] = prev / temp[6][k]
              break
            default:
              break
          }
        }
        // 全部可能的答案
        res.push(...temp[j])
      }
    }
    return res
  }
  // 记录是否用过了
  const visited = new Array(nums.length).fill(false)
  for (let i = 0; i < nums.length; i++) {
    visited[i] = true
    const res = helper(nums[i], 1)
    if (res.some((num) => Math.abs(24 - num) < 0.01)) {
      return true
    }
    visited[i] = false
  }
  return false
}
