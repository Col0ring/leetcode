export function findMin(nums: number[]): number {
  let low = 0
  let high = nums.length - 1
  while (low < high) {
    const pivot = (high + low) >> 1
    if (nums[pivot] < nums[high]) {
      high = pivot
    } else if (nums[pivot] > nums[high]) {
      low = pivot + 1
    } else {
      // 相等时，不管 high 是不是最小，都可以 -1 ，因为如果是最小，减去后 high 的值不会再变了，所以最后left等于没有减去的 high
      high -= 1
    }
  }
  return nums[low]
}
