// 直接求解
// export function findMedianSortedArrays(
//   nums1: number[],
//   nums2: number[]
// ): number {
//   const arr = [...nums1, ...nums2]
//   arr.sort((n1, n2) => {
//     return n1 - n2
//   })
//   const l = arr.length

//   return l % 2 === 0 ? (arr[l / 2] + arr[l / 2 - 1]) / 2 : arr[(l - 1) / 2]
// }

// 还是合并数组
export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const mergeArr: number[] = []
  let result = 0,
    i = 0,
    j = 0
  // 合并有序数组，也可以直接合并，然后用sort排序，但效率没有这样高
  while (i < nums1.length || j < nums2.length) {
    // 当一个数组已经遍历完了，说明另一个数组剩下的一定是大的值，直接往后拼接就行
    // 0要排除，要不然会出现内存泄露
    if (!nums1[i] && nums1[i] !== 0) {
      mergeArr.push(nums2[j])
      j++
    } else if (!nums2[j] && nums2[j] !== 0) {
      mergeArr.push(nums1[i])
      i++
    } else {
      if (nums1[i] > nums2[j]) {
        mergeArr.push(nums2[j])
        j++
      } else {
        mergeArr.push(nums1[i])
        i++
      }
    }
  }
  // 求中位数，没什么好说的了
  let halfArr = mergeArr.length / 2
  if (mergeArr.length % 2 == 0) {
    result = (mergeArr[halfArr] + mergeArr[halfArr - 1]) / 2
  } else {
    result = mergeArr[Math.floor(halfArr)]
  }
  return result
}
