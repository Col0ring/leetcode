/**
 Do not return anything, modify nums in-place instead.
 */
export function rotate(nums: number[], k: number): void {
  const moveLen = nums.length - (k % nums.length)
  nums.splice(0, 0, ...nums.splice(moveLen))
}
