export function findShortestSubArray(nums: number[]): number {
  const mp: Record<string, number[]> = {}

  for (const [i, num] of nums.entries()) {
    if (num in mp) {
      mp[num][0]++
      mp[num][2] = i
    } else {
      mp[num] = [1, i, i]
    }
  }

  let maxNum = 0,
    minLen = 0
  for (const [count, left, right] of Object.values(mp)) {
    if (maxNum < count) {
      maxNum = count
      minLen = right - left + 1
    } else if (maxNum === count) {
      if (minLen > right - left + 1) {
        minLen = right - left + 1
      }
    }
  }
  return minLen
}
