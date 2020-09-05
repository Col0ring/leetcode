export function getPermutation(n: number, k: number): string {
  const nums = []
  let factorial = 1 // 阶乘

  for (let i = 1; i <= n; i++) {
    nums.push(i) // [1, 2, 3, 4]
    factorial = factorial * i // 4!   24
  }

  k-- // nums中数字们的索引是从0开始，k要先减去1
  let resStr = ''

  while (nums.length > 0) {
    // 选了一个数字就删掉，直到为空
    factorial = factorial / nums.length //  3! .. 2! .. 1!
    // 如果 k / factorial 小于 0 就是 0
    const index = Math.floor(k / factorial) // 当前选择的数字的索引
    resStr += nums[index] // 加上当前选的数字
    nums.splice(index, 1) // nums删去选的这个数字
    k = k % factorial // 更新 k，
  }
  return resStr
}
