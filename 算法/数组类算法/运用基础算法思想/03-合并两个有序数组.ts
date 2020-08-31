/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  // 长度减一
  m--
  n--
  // 遍历数组，每次遍历都能确定一个数的位置，最多遍历 nums1.length === m + n 次
  for (let i = nums1.length - 1; i >= 0; i--) {
    // 如果 nums1 数组已经遍历了 m 次，表示 nums1 数组中的非零整数的位置都已经确定了
    if (m < 0) {
      // nums1 和 nums2 两个数组遍历中交错取值，而 nums1 数组中的元素位置确定，表明 nums2 数组中剩余未遍历的元素都比 nums1 数组中最后一次遍历的元素要小
      // 于是直接将 nums2 数组中剩余未遍历的元素，从 nums1 数组开头位置按顺序添加，并删除 nums2 数组中原来的元素
      nums1.splice(0, n + 1, ...nums2.slice(0, n + 1))
      // 直接终止遍历即可
      break
    }
    // 如果 nums2 数组已经遍历了 n 次，表示 nums2 数组中的元素位置都已经确定了
    if (n < 0) {
      // nums1 和 nums2 数组都是有序整数数组，nums2 数组中的元素位置确定，而且是从后往前修改 nums1 数组，表明 nums1 数组中剩余未遍历的元素，是有序且无需遍历，即 nums1 数组已经是组合完成并有序的了，直接终止遍历即可
      break
    }
    // 倒序遍历，从大小到确定两个数组中的元素
    if (nums2[n] > nums1[m]) {
      // 将比较后更大的一方，从末尾开始保存在 nums1 数组中，每遍历一次确定一个数的位置
      nums1[i] = nums2[n]
      // 更新 nums2 数组下一个待检查元素的索引位置
      n--
    } else {
      nums1[i] = nums1[m]
      m--
    }
  }
}
