/**
 * 桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。桶排序 (Bucket sort)的工作的原理：假设输入数据服从均匀分布，将数据分到有限数量的桶里，每个桶再分别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排）。
 * 算法描述:
 * 设置一个定量的数组当作空桶；
 * 遍历输入数据，并且把数据一个一个放到对应的桶里去；
 * 对每个不是空的桶进行排序；
 * 从不是空的桶里把排好序的数据拼接起来。
 */
import { insertionSort } from './插入排序(Insertion Sort)'

export function bucketSort(arr: number[], bucketSize: number) {
  if (arr.length === 0) {
    return arr
  }

  let i = 0

  let minValue = arr[0]

  let maxValue = arr[0]

  for (i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i] // 输入数据的最小值
    } else if (arr[i] > maxValue) {
      maxValue = arr[i] // 输入数据的最大值
    }
  }

  // 桶的初始化

  const DEFAULT_BUCKET_SIZE = 5 // 设置桶的默认数量为5

  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE

  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1

  const buckets: number[][] = new Array(bucketCount)

  for (i = 0; i < buckets.length; i++) {
    buckets[i] = []
  }

  // 利用映射函数将数据分配到各个桶中

  for (i = 0; i < arr.length; i++) {
    buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i])
  }

  arr.length = 0

  for (i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i]) // 对每个桶进行排序，这里使用了插入排序

    for (let j = 0; j < buckets[i].length; j++) {
      arr.push(buckets[i][j])
    }
  }

  return arr
}
