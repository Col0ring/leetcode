export function reversePrefix(word: string, ch: string): string {
  const index = word.indexOf(ch)
  let ans = word
  if (index >= 0) {
    const arr = [...ans]
    let left = 0,
      right = index
    while (left < right) {
      const temp = arr[left]
      arr[left] = arr[right]
      arr[right] = temp
      left++
      right--
    }
    ans = arr.join('')
  }
  return ans
}
