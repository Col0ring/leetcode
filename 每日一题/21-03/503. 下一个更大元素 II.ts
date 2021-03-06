// 单调栈 + 循坏数组
export function nextGreaterElements(nums: number[]): number[] {
  const n = nums.length
  const ret = new Array(n).fill(-1)
  const stk: number[] = []
  // 最多只需要两遍
  for (let i = 0; i < n * 2 - 1; i++) {
    while (stk.length && nums[stk[stk.length - 1]] < nums[i % n]) {
      ret[stk[stk.length - 1]] = nums[i % n]
      stk.pop()
    }
    // 将每隔值放入栈
    stk.push(i % n)
  }
  return ret
}
