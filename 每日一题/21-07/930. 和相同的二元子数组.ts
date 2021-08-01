export function numSubarraysWithSum(nums: number[], goal: number): number {
  let sum = 0
  const cnt = new Map<number, number>()
  let ret = 0
  for (const num of nums) {
    cnt.set(sum, (cnt.get(sum) || 0) + 1)
    sum += num
    ret += cnt.get(sum - goal) || 0
  }
  return ret
}
