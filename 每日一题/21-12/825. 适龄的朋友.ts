export function numFriendRequests(ages: number[]): number {
  const n = ages.length
  ages.sort((a, b) => a - b)
  let left = 0,
    right = 0,
    ans = 0
  for (const age of ages) {
    if (age < 15) {
      continue
    }
    while (ages[left] <= 0.5 * age + 7) {
      ++left
    }
    while (right + 1 < n && ages[right + 1] <= age) {
      ++right
    }
    ans += right - left
  }
  return ans
}
