export function modifyString(s: string): string {
  const n = s.length
  const arr = s.split('')
  for (let i = 0; i < n; ++i) {
    if (arr[i] === '?') {
      for (let j = 0; j < 3; ++j) {
        if (
          (i > 0 &&
            arr[i - 1] === String.fromCharCode('a'.charCodeAt(0) + j)) ||
          (i < n - 1 &&
            arr[i + 1] === String.fromCharCode('a'.charCodeAt(0) + j))
        ) {
          continue
        }
        arr[i] = String.fromCharCode('a'.charCodeAt(0) + j)
        break
      }
    }
  }
  return arr.join('')
}
