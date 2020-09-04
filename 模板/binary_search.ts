// 模板 1
function binary_search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((right + left) / 2)
    if (nums[mid] === target) {
      return mid
    }
    if (target < nums[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}

// 模板 2 用于查找需要访问数组中当前索引及其直接右邻居索引的元素或条件
function binary_search2(nums: number[], target: number): number {
  if (!nums || nums.length === 0) {
    return -1
  }

  let left = 0,
    right = nums.length

  while (left < right) {
    // Prevent (left + right) overflow
    const mid = Math.floor((right + left) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  // Post-processing:
  // End Condition: left === right
  if (left !== nums.length && nums[left] === target) {
    return left
  }
  return -1
}

// 模板 3 是二分查找的另一种独特形式。 它用于搜索需要访问当前索引及其在数组中的直接左右邻居索引的元素或条件。
function binary_search3(nums: number[], target: number): number {
  if (!nums || nums.length == 0) {
    return -1
  }

  let left = 0,
    right = nums.length - 1
  while (left + 1 < right) {
    // Prevent (left + right) overflow
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid
    } else {
      right = mid
    }
  }

  // Post-processing:
  // End Condition: left + 1 == right
  if (nums[left] == target) {
    return left
  }
  if (nums[right] == target) {
    return right
  }
  return -1
}
