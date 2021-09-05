/**
 * The rand7() API is already defined for you.
 * function rand7(): number {}
 * @return a random integer in the range 1 to 7
 */
declare function rand7(): number

// 拒绝采样，不满足要求就继续随机
export function rand10(): number {
  let row = rand7()
  let col = rand7()
  let idx = col + (row - 1) * 7
  // 只要小于 40 的数，如果大于 40 就重新随机
  while (idx > 40) {
    row = rand7()
    col = rand7()
    idx = col + (row - 1) * 7
  }
  return 1 + ((idx - 1) % 10)
}
