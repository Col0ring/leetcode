// 暴力
// export function sumOddLengthSubarrays(arr: number[]): number {
//   let sum = 0
//   const n = arr.length
//   // 每个子项
//   for (let start = 0; start < n; start++) {
//     // 数组长度
//     for (let length = 1; start + length <= n; length += 2) {
//       // 结束索引
//       const end = start + length - 1
//       for (let i = start; i <= end; i++) {
//         sum += arr[i]
//       }
//     }
//   }
//   return sum
// }

// 前缀和
export function sumOddLengthSubarrays(arr: number[]): number {
  const n = arr.length
  const prefixSums: number[] = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    prefixSums[i + 1] = prefixSums[i] + arr[i]
  }
  let sum = 0
  for (let start = 0; start < n; start++) {
    for (let length = 1; start + length <= n; length += 2) {
      const end = start + length - 1
      // 这里少 O(n) 计算子数组的和
      sum += prefixSums[end + 1] - prefixSums[start]
    }
  }
  return sum
}
