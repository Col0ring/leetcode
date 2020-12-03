export function countPrimes(n: number): number {
  let ans = 0
  for (let i = 2; i < n; i++) {
    let flag = true
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        flag = false
        break
      }
    }
    if (flag) {
      ans++
    }
  }
  return ans
}
