export function findMinFibonacciNumbers(k: number): number {
  const f = [1]
  let a = 1,
    b = 1
  //  所有比 k 小的斐波那契数
  while (a + b <= k) {
    let c = a + b
    f.push(c)
    a = b
    b = c
  }
  let ans = 0
  // 从后往前找值
  for (let i = f.length - 1; i >= 0 && k > 0; i--) {
    const num = f[i]
    if (k >= num) {
      k -= num
      ans++
    }
  }
  return ans
}
