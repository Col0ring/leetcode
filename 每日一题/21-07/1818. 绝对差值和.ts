export function minAbsoluteSumDiff(nums1: number[], nums2: number[]): number {
  const MOD = 10 ** 9 + 7
  const n = nums1.length
  const rec = [...nums1]
  rec.sort((a, b) => a - b)
  let sum = 0,
    maxn = 0
  for (let i = 0; i < n; i++) {
    const diff = Math.abs(nums1[i] - nums2[i])
    sum = (sum + diff) % MOD
    const j = binarySearch(rec, nums2[i])
    if (j < n) {
      maxn = Math.max(maxn, diff - (rec[j] - nums2[i]))
    }
    if (j > 0) {
      maxn = Math.max(maxn, diff - (nums2[i] - rec[j - 1]))
    }
  }
  return (sum - maxn + MOD) % MOD
}

const binarySearch = (rec: number[], target: number) => {
  let low = 0,
    high = rec.length - 1
  if (rec[high] < target) {
    return high + 1
  }
  while (low < high) {
    const mid = Math.floor((high - low) / 2) + low
    if (rec[mid] < target) {
      low = mid + 1
    } else {
      high = mid
    }
  }
  return low
}
