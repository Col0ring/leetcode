/**
 * 冒泡排序是一种简单的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。
 */
// export function bubbleSort(arr: number[]) {
//   const len = arr.length
//   for (let i = 0; i < len - 1; i++) {
//     for (let j = 0; j < len - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//       }
//     }
//   }
//   return arr
// }

// 优化

export function bubbleSort(arr: number[]) {
  if (!Array.isArray(arr) || arr.length <= 1) return
  let lastIndex = arr.length - 1
  while (lastIndex > 0) {
    // 当最后一个交换的元素为第一个时，说明后面全部排序完毕
    let flag = true,
      k = lastIndex
    for (let j = 0; j < k; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = false
        lastIndex = j // 设置最后一次交换元素的位置
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
    if (flag) break
  }
}
