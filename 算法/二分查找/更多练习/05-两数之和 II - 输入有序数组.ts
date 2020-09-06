// function twoSum(numbers: number[], target: number): number[] {
//   for (let i = 0; i < numbers.length; i++) {
//     const need = target - numbers[i]
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (need === numbers[j]) {
//         return [i + 1, j + 1]
//       }
//     }
//   }
//   return []
// }

// 双指针
export function twoSum(numbers: number[], target: number): number[] {
  let left = 0
  let right = numbers.length - 1
  while (left < right) {
    const sum = numbers[left] + numbers[right]
    if (sum === target) {
      return [left + 1, right + 1]
    }
    if (sum > target) {
      right--
    } else {
      left++
    }
  }
  return []
}
