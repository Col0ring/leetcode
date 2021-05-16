// 暴力解法
// export function findMaximumXOR(nums: number[]): number {
//   if (nums.length <= 1) return 0
//   let res = -Infinity
//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       res = Math.max(res, nums[i] ^ nums[j])
//     }
//   }
//   return res
// }

// hash
export function findMaximumXOR(nums: number[]): number {
  const HIGH_BIT = 30
  let x = 0
  for (let k = HIGH_BIT; k >= 0; --k) {
    const seen = new Set<number>()
    // 将所有的 pre^k(a_j) 放入哈希表中
    for (const num of nums) {
      // 如果只想保留从最高位开始到第 k 个二进制位为止的部分
      // 只需将其右移 k 位
      seen.add(num >> k)
    }

    // 目前 x 包含从最高位开始到第 k+1 个二进制位为止的部分
    // 我们将 x 的第 k 个二进制位置为 1，即为 x = x*2+1
    const xNext = x * 2 + 1
    let found = false

    // 枚举 i
    for (const num of nums) {
      if (seen.has(xNext ^ (num >> k))) {
        found = true
        break
      }
    }

    if (found) {
      x = xNext
    } else {
      // 如果没有找到满足等式的 a_i 和 a_j，那么 x 的第 k 个二进制位只能为 0
      // 即为 x = x*2
      x = xNext - 1
    }
  }
  return x
}
