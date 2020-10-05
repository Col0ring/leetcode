// 排序 + 递归
// export function fourSum(nums: number[], target: number): number[][] {
//   const ans: number[][] = []
//   const len = nums.length
//   if (len < 4) {
//     return ans
//   }
//   nums.sort((a, b) => a - b)
//   const helper = (sum: number, index: number, arr: number[]) => {
//     if (sum > 0 && sum > target) {
//       return
//     }
//     if (arr.length === 4) {
//       if (sum === target) {
//         ans.push([...arr])
//       }
//       return
//     }
//     let last: number = NaN
//     for (let i = index; i < len; i++) {
//       // 排序过，不要相同的
//       if (last === nums[i]) {
//         continue
//       }
//       last = nums[i]
//       arr.push(nums[i])
//       helper(sum + nums[i], i + 1, arr)
//       arr.pop()
//     }
//   }

//   helper(0, 0, [])

//   return ans
// }

// 排序 + 双指针
export function fourSum(nums: number[], target: number): number[][] {
  const quadruplets: number[][] = []
  if (nums.length < 4) {
    return quadruplets
  }
  nums.sort((x, y) => x - y)
  const length = nums.length
  for (let i = 0; i < length - 3; i++) {
    // 减枝操作
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
      break
    }
    if (
      nums[i] + nums[length - 3] + nums[length - 2] + nums[length - 1] <
      target
    ) {
      continue
    }
    for (let j = i + 1; j < length - 2; j++) {
      // 再剪
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue
      }
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
        break
      }
      if (nums[i] + nums[j] + nums[length - 2] + nums[length - 1] < target) {
        continue
      }
      // 双指针
      let left = j + 1,
        right = length - 1
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right]
        if (sum === target) {
          quadruplets.push([nums[i], nums[j], nums[left], nums[right]])
          // 去重
          while (left < right && nums[left] === nums[left + 1]) {
            left++
          }
          left++
          // 去重
          while (left < right && nums[right] === nums[right - 1]) {
            right--
          }
          right--
        } else if (sum < target) {
          left++
        } else {
          right--
        }
      }
    }
  }
  return quadruplets
}
