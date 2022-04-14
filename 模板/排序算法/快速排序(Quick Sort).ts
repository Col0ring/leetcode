/**
 * 快速排序的基本思想：通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。
 * 基本步骤：
 * 从数组中选择一个元素作为基准点，排序数组，所有比基准值小的元素摆在在左边，而大于基准值的摆放在右边。每次分割结束以后基准值会插入到中间去。最后利用递归，将摆放在左边的数组和右边的数组在进行一次上述的1和2操作。
 */

// 版本一，容易理解版
// export function quickSort(arr: number[]): number[] {
//   // 如果数组不可在分，则跳出递归
//   if (arr.length <= 1) {
//     return arr
//   }
//   // 基准值取数组第一个
//   const pivot = arr[0]
//   const left: number[] = []
//   const right: number[] = []
//   for (let i = 1; i < arr.length; i++) {
//     // 小于等于基准值的放在左边,大于基准值的放在右边
//     if (arr[i] <= pivot) {
//       left.push(arr[i])
//     } else {
//       right.push(arr[i])
//     }
//   }
//   // 对左右数组递归quickSort，最后合并成一个完整的数组
//   return quickSort(left).concat(pivot).concat(quickSort(right))
// }
// 原地排序
export function quickSort(array: number[]) {
  function swap(array: number[], i: number, j: number) {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }

  function partition(arr: number[], left: number, right: number) {
    const pivot = left // 设定基准值（pivot）
    let index = pivot + 1

    for (let i = index; i <= right; i++) {
      // 更小就换位置
      if (arr[i] < arr[pivot]) {
        swap(arr, i, index)
        index++
      }
    }
    // 因为最后一个加了 index，所以要减去
    swap(arr, pivot, index - 1)
    return index - 1
  }

  function sort(array: number[], left: number, right: number) {
    if (left > right) {
      return
    }
    const storeIndex = partition(array, left, right)
    sort(array, left, storeIndex - 1)
    sort(array, storeIndex + 1, right)
  }

  sort(array, 0, array.length - 1)
  return array
}
