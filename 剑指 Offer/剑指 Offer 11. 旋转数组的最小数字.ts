// 暴力
// export function minArray(numbers: number[]): number {
//     let min = Number.MAX_VALUE
//     for(let i = 0; i < numbers.length; i++) {
//         if(numbers[i] < min) {
//             min = numbers[i]
//         }
//     }
//     return min
// };

// 二分
export function minArray(numbers: number[]): number {
  let low = 0
  let high = numbers.length - 1
  while (low < high) {
    // 起始就是 (high + low) / 2，这里避免溢出
    const pivot = low + Math.floor((high - low) / 2)
    if (numbers[pivot] < numbers[high]) {
      high = pivot
    } else if (numbers[pivot] > numbers[high]) {
      low = pivot + 1
    } else {
      high -= 1
    }
  }
  return numbers[low]
}
