export function bestRotation(nums: number[]): number {
  const n = nums.length
  const diffs: number[] = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    const low = (i + 1) % n
    const high = (i - nums[i] + n + 1) % n
    diffs[low]++
    diffs[high]--
    if (low >= high) {
      diffs[0]++
    }
  }
  let bestIndex = 0
  let maxScore = 0
  let score = 0
  for (let i = 0; i < n; i++) {
    score += diffs[i]
    if (score > maxScore) {
      bestIndex = i
      maxScore = score
    }
  }
  return bestIndex
}
