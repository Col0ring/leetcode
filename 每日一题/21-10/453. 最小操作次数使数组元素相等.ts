export function minMoves(nums: number[]): number {
  const minNum = Math.min(...nums)
  let res = 0
  for (const num of nums) {
    res += num - minNum
  }
  return res
}
