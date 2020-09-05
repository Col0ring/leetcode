// 线性扫描
// export function nextGreatestLetter(letters: string[], target: string): string {
//   // 因为已经排序了
//   for (let c of letters) {
//     if (c > target) {
//       return c
//     }
//   }
//   return letters[0]
// }

// 二分
export function nextGreatestLetter(letters: string[], target: string): string {
  let lo = 0,
    hi = letters.length
  while (lo < hi) {
    const mi = (hi + lo) >> 1
    if (letters[mi] <= target) {
      lo = mi + 1
    } else {
      hi = mi
    }
  }
  // 模运算，如果是最后一位的话证明没有大的，插入到第一位
  return letters[lo % letters.length]
}
