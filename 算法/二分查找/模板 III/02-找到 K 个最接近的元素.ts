// 排序
// export function findClosestElements(
//   arr: number[],
//   k: number,
//   x: number
// ): number[] {
//   arr.sort((a, b) => (a === b ? a - b : Math.abs(a - x) - Math.abs(b - x)))
//   const ans = new Array(k)
//   for (let i = 0; i < k; i++) {
//     ans[i] = arr[i]
//   }
//   ans.sort((a, b) => a - b)
//   return ans
// }

// 二分
export function findClosestElements(
  arr: number[],
  k: number,
  x: number
): number[] {
  let low = 0
  let high = arr.length - 1
  // 先找到最接近的数
  while (low <= high) {
    const mid = (low + high) >> 1
    if (arr[mid] === x) {
      low = mid
      break
    }
    if (arr[mid] < x) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  // 然后找到左右的边界点
  let left = Math.max(0, low - k - 1)
  let right = Math.min(arr.length - 1, low + k + 1)
  // 需要删除左右多余的部分
  while (right - left >= k) {
    if (x - arr[left] <= arr[right] - x) {
      right--
    } else {
      left++
    }
  }
  return arr.slice(left, right + 1)
}
