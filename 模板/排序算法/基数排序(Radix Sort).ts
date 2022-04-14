/**
 * 基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序。最后的次序就是高优先级高的在前，高优先级相同的低优先级高的在前。
 * 算法描述：
 * 取得数组中的最大数，并取得位数；
 * arr为原始数组，从最低位开始取每个位组成radix数组；
 * 对radix进行计数排序（利用计数排序适用于小范围数的特点）；
 */

export function radixSort(arr: number[], maxDigit: number) {
  let mod = 10
  let dev = 1
  const counter: number[][] = []

  for (let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
    for (let j = 0; j < arr.length; j++) {
      const bucket = Math.floor((arr[j] % mod) / dev)
      if (!counter[bucket]) {
        counter[bucket] = []
      }
      counter[bucket].push(arr[j])
    }

    let pos = 0

    for (let j = 0; j < counter.length; j++) {
      let value = null
      if (counter[j] !== null) {
        while ((value = counter[j].shift()) != null) {
          arr[pos++] = value
        }
      }
    }
  }

  return arr
}
