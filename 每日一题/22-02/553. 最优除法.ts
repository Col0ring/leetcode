export function optimalDivision(nums: number[]): string {
  if (nums.length <= 2) {
    return nums.join('/')
  }
  return [nums[0], '/(', nums.slice(1).join('/'), ')'].join('')
}
