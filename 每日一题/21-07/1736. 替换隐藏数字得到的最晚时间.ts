export function maximumTime(time: string): string {
  const arr = Array.from(time)
  if (arr[0] === '?') {
    arr[0] = '4' <= arr[1] && arr[1] <= '9' ? '1' : '2'
  }
  if (arr[1] === '?') {
    arr[1] = arr[0] == '2' ? '3' : '9'
  }
  if (arr[3] === '?') {
    arr[3] = '5'
  }
  if (arr[4] === '?') {
    arr[4] = '9'
  }
  return arr.join('')
}
