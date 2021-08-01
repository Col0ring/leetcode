// hash
export function findErrorNums(nums: number[]): number[] {
  const errorNums: number[] = new Array(2).fill(0)
  const n = nums.length
  const map = new Map<number, number>()
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }
  for (let i = 1; i <= n; i++) {
    const count = map.get(i) || 0
    if (count === 2) {
      errorNums[0] = i
    } else if (count === 0) {
      errorNums[1] = i
    }
  }
  return errorNums
}
