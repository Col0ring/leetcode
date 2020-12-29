export function minPatches(nums: number[], n: number): number {
  let patches = 0
  let x = 1
  const length = nums.length
  let index = 0
  while (x <= n) {
    if (index < length && nums[index] <= x) {
      x += nums[index]
      index++
    } else {
      x *= 2
      patches++
    }
  }
  return patches
}
