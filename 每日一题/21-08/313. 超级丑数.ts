export function nthSuperUglyNumber(n: number, primes: number[]): number {
  const dp: number[] = new Array(n + 1).fill(0)
  dp[1] = 1
  const m = primes.length
  const pointers: number[] = new Array(m).fill(1)
  for (let i = 2; i <= n; i++) {
    const nums: number[] = new Array(m).fill(m)
    let minNum = Number.MAX_SAFE_INTEGER
    for (let j = 0; j < m; j++) {
      nums[j] = dp[pointers[j]] * primes[j]
      minNum = Math.min(minNum, nums[j])
    }
    dp[i] = minNum
    for (let j = 0; j < m; j++) {
      if (minNum == nums[j]) {
        pointers[j]++
      }
    }
  }
  return dp[n]
}
