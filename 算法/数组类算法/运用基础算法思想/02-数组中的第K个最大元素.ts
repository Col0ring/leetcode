// 直接排序
// export function findKthLargest(nums: number[], k: number): number {
//   nums.sort((a, b) => a - b)
//   return nums[nums.length - k]
// }

// 构造前 k 个最大元素小顶堆
// export function findKthLargest(nums: number[], k: number): number {
//   // 从 nums 中取出前 k 个数，构建一个小顶堆
//   const heap: number[] = [0]
//   let i = 0
//   while (i < k) {
//     heap.push(nums[i++])
//   }
//   buildHeap(heap, k)

//   // 从 k 位开始遍历数组
//   for (let i = k; i < nums.length; i++) {
//     if (heap[1] < nums[i]) {
//       // 替换并堆化
//       heap[1] = nums[i]
//       heapify(heap, k, 1)
//     }
//   }

//   // 返回堆顶元素
//   return heap[1]
// }

// // 原地建堆，从后往前，自上而下式建小顶堆
// const buildHeap = (arr: number[], k: number) => {
//   if (k === 1) return
//   // 从最后一个非叶子节点开始，自上而下式堆化
//   for (let i = Math.floor(k / 2); i >= 1; i--) {
//     heapify(arr, k, i)
//   }
// }

// // 堆化
// const heapify = (arr: number[], k: number, i: number) => {
//   // 自上而下式堆化
//   while (true) {
//     let minIndex = i
//     if (2 * i <= k && arr[2 * i] < arr[i]) {
//       minIndex = 2 * i
//     }
//     if (2 * i + 1 <= k && arr[2 * i + 1] < arr[minIndex]) {
//       minIndex = 2 * i + 1
//     }
//     if (minIndex !== i) {
//       swap(arr, i, minIndex)
//       i = minIndex
//     } else {
//       break
//     }
//   }
// }

// // 交换
// const swap = (arr: number[], i: number, j: number) => {
//   const temp = arr[i]
//   arr[i] = arr[j]
//   arr[j] = temp
// }

// 快排

export function findKthLargest(nums: number[], k: number): number {
  return quickSelect(nums, nums.length - k)
}

const quickSelect = (arr: number[], k: number) => {
  return quick(arr, 0, arr.length - 1, k)
}

const quick = (
  arr: number[],
  left: number,
  right: number,
  k: number
): number => {
  let index = 0
  if (left < right) {
    // 划分数组
    index = partition(arr, left, right)
    // Top k
    if (k === index) {
      return arr[index]
    } else if (k < index) {
      // Top k 在左边
      return quick(arr, left, index - 1, k)
    } else {
      // Top k 在右边
      return quick(arr, index + 1, right, k)
    }
  }
  return arr[left]
}

let partition = (arr: number[], left: number, right: number): number => {
  // 取中间项为基准
  const datum = arr[Math.floor(Math.random() * (right - left + 1)) + left]
  let i = left,
    j = right
  // 开始调整
  while (i < j) {
    // 左指针右移
    while (arr[i] < datum) {
      i++
    }

    // 右指针左移
    while (arr[j] > datum) {
      j--
    }

    // 交换
    if (i < j) swap(arr, i, j)

    // 当数组中存在重复数据时，即都为datum，但位置不同
    // 继续递增i，防止死循环
    if (arr[i] === arr[j] && i !== j) {
      i++
    }
  }
  return i
}

// 交换
const swap = (arr: number[], i: number, j: number): void => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
