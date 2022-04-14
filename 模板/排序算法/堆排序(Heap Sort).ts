/**
 * 堆排序（Heapsort）是指利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。
 * 算法描述：
 * 将初始待排序关键字序列(R1,R2….Rn)构建成大顶堆，此堆为初始的无序区；
 * 将堆顶元素R[1]与最后一个元素R[n]交换，此时得到新的无序区(R1,R2,……Rn-1)和新的有序区(Rn),且满足R[1,2…n-1]<=R[n]；
 * 由于交换后新的堆顶R[1]可能违反堆的性质，因此需要对当前无序区(R1,R2,……Rn-1)调整为新堆，然后再次将R[1]与无序区最后一个元素交换，得到新的无序区(R1,R2….Rn-2)和新的有序区(Rn-1,Rn)。不断重复此过程直到有序区的元素个数为n-1，则整个排序过程完成。
 */
export function heapSort(array: number[]) {
  let length = array.length

  // 如果不是数组或者数组长度小于等于1，直接返回，不需要排序
  if (!Array.isArray(array) || length <= 1) return

  buildMaxHeap(array) // 将传入的数组建立为大顶堆

  // 每次循环，将最大的元素与末尾元素交换，然后剩下的元素重新构建为大顶堆
  for (let i = length - 1; i > 0; i--) {
    swap(array, 0, i)
    adjustMaxHeap(array, 0, i) // 将剩下的元素重新构建为大顶堆
  }

  return array
}

function adjustMaxHeap(array: number[], index: number, heapSize: number) {
  let iMax, iLeft, iRight

  while (true) {
    iMax = index // 保存最大值的索引
    iLeft = 2 * index + 1 // 获取左子元素的索引
    iRight = 2 * index + 2 // 获取右子元素的索引

    // 如果左子元素存在，且左子元素大于最大值，则更新最大值索引
    if (iLeft < heapSize && array[iMax] < array[iLeft]) {
      iMax = iLeft
    }

    // 如果右子元素存在，且右子元素大于最大值，则更新最大值索引
    if (iRight < heapSize && array[iMax] < array[iRight]) {
      iMax = iRight
    }

    // 如果最大元素被更新了，则交换位置，使父节点大于它的子节点，同时将索引值跟新为被替换的值，继续检查它的子树
    if (iMax !== index) {
      swap(array, index, iMax)
      index = iMax
    } else {
      // 如果未被更新，说明该子树满足大顶堆的要求，退出循环
      break
    }
  }
}

// 构建大顶堆
function buildMaxHeap(array: number[]) {
  let length = array.length,
    iParent = (length >> 1) - 1 // 获取最后一个非叶子点的元素

  for (let i = iParent; i >= 0; i--) {
    adjustMaxHeap(array, i, length) // 循环调整每一个子树，使其满足大顶堆的要求
  }
}

// 交换数组中两个元素的位置
function swap(array: number[], i: number, j: number) {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}
