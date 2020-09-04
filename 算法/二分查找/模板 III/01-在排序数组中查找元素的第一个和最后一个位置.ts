export function searchRange(nums: number[], target: number): number[] {
  const search = (nums: number[], target: number) => {
    let l = 0,
      r = nums.length
    while (l < r) {
      const m = Math.floor((l + r) / 2)
      if (nums[m] < target) l = m + 1
      else r = m
    }
    return l
  }
  const a = search(nums, target)
  if (a === nums.length || nums[a] !== target) {
    //这表明数组中不存在target
    return [-1, -1]
  }
  // 因为是升序排列，所以找到第一个大于target的数
  const b = search(nums, target + 1)
  return [a, b - 1] //否则数组中存在target，则b-1是最后一个target的元素索引
}
