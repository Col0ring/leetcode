// 设计集合判断
export function reverseVowels(s: string): string {
  const setHelper = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  let arr = s.split('')
  let i = 0
  let j = arr.length - 1
  while (i < j) {
    if (setHelper.has(arr[i])) {
      // 左边是否有元音字母
      if (setHelper.has(arr[j])) {
        // 如果左边有元音字母，右边也有，那么交换
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
        i++
      }
      j--
    } else {
      i++
    }
  }
  return arr.join('')
}
