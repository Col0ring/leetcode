export function reverseStr(s: string, k: number): string {
  const n = s.length
  const arr = Array.from(s)
  for (let i = 0; i < n; i += 2 * k) {
    reverse(arr, i, Math.min(i + k, n) - 1)
  }
  return arr.join('')
}

const reverse = (arr: string[], left: number, right: number) => {
  while (left < right) {
    const temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    left++
    right--
  }
}
