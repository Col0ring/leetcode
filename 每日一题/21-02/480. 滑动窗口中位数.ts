export function medianSlidingWindow(nums: number[], k: number): number[] {
  const isOdd = k % 2 ? true : false
  const mid = Math.floor(k / 2)
  let delPos = 0
  let arr: number[] = []
  let ans: number[] = []
  for (let i = 0; i < nums.length + 1; i++) {
    if (arr.length === k) {
      arr.sort((a, b) => a - b)
      const index = arr.indexOf(nums[delPos])
      if (isOdd) {
        ans.push(arr[mid])
      } else {
        ans.push((arr[mid - 1] + arr[mid]) / 2)
      }
      arr.splice(index, 1)
      delPos++
    }
    arr.push(nums[i])
  }
  return ans
}
