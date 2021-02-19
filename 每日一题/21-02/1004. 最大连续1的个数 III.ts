export function longestOnes(A: number[], K: number): number {
  const n = A.length
  const P = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; ++i) {
    P[i] = P[i - 1] + (1 - A[i - 1])
  }

  let ans = 0
  for (let right = 0; right < n; ++right) {
    const left = binarySearch(P, P[right + 1] - K)
    ans = Math.max(ans, right - left + 1)
  }
  return ans
}

const binarySearch = (P: number[], target: number) => {
  let low = 0,
    high = P.length - 1
  while (low < high) {
    const mid = Math.floor((high - low) / 2) + low
    if (P[mid] < target) {
      low = mid + 1
    } else {
      high = mid
    }
  }
  return low
}
