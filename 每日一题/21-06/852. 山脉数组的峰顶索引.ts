// 二分
export function peakIndexInMountainArray(arr: number[]): number {
  const n = arr.length
  let left = 1,
    right = n - 2,
    ans = 0

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (arr[mid] > arr[mid + 1]) {
      ans = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return ans
}
