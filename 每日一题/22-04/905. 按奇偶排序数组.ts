export function sortArrayByParity(nums: number[]): number[] {
  let n = nums.length,
    index = 0
  const res: number[] = new Array(n).fill(0)
  for (const num of nums) {
    if (num % 2 === 0) {
      res[index++] = num
    }
  }
  for (const num of nums) {
    if (num % 2 === 1) {
      res[index++] = num
    }
  }
  return res
}
