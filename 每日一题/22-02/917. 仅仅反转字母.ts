const swap = (arr: string[], left: number, right: number) => {
  const temp = arr[left]
  arr[left] = arr[right]
  arr[right] = temp
}
export function reverseOnlyLetters(s: string): string {
  const n = s.length
  const arr = [...s]
  let left = 0,
    right = n - 1
  while (true) {
    while (left < right && !/^[a-zA-Z]+$/.test(s[left])) {
      // 判断左边是否扫描到字母
      left++
    }
    while (right > left && !/^[a-zA-Z]+$/.test(s[right])) {
      // 判断右边是否扫描到字母
      right--
    }
    if (left >= right) {
      break
    }
    swap(arr, left, right)
    left++
    right--
  }
  return arr.join('')
}
