export function kSmallestPairs(
  nums1: number[],
  nums2: number[],
  k: number
): number[][] {
  const m = nums1.length
  const n = nums2.length
  /*二分查找第 k 小的数对和的大小*/
  let left = nums1[0] + nums2[0]
  let right = nums1[m - 1] + nums2[n - 1]
  let pairSum = right
  while (left <= right) {
    const mid = left + ((right - left) >> 1)
    let cnt = 0
    let start = 0
    let end = n - 1
    while (start < m && end >= 0) {
      if (nums1[start] + nums2[end] > mid) {
        end--
      } else {
        cnt += end + 1
        start++
      }
    }
    if (cnt < k) {
      left = mid + 1
    } else {
      pairSum = mid
      right = mid - 1
    }
  }

  const ans: number[][] = []
  let pos = n - 1
  /*找到小于目标值 pairSum 的数对*/
  for (let i = 0; i < m; i++) {
    while (pos >= 0 && nums1[i] + nums2[pos] >= pairSum) {
      pos--
    }
    for (let j = 0; j <= pos && k > 0; j++, k--) {
      const list: number[] = []
      list.push(nums1[i])
      list.push(nums2[j])
      ans.push(list)
    }
  }

  /*找到等于目标值 pairSum 的数对*/
  pos = n - 1
  for (let i = 0; i < m && k > 0; i++) {
    while (pos >= 0 && nums1[i] + nums2[pos] > pairSum) {
      pos--
    }
    for (
      let j = i;
      k > 0 && j >= 0 && nums1[j] + nums2[pos] == pairSum;
      j--, k--
    ) {
      const list: number[] = []
      list.push(nums1[i])
      list.push(nums2[pos])
      ans.push(list)
    }
  }
  return ans
}
