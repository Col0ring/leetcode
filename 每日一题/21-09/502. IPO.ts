export function findMaximizedCapital(
  k: number,
  w: number,
  profits: number[],
  capital: number[]
): number {
  const len: number = profits.length
  const temp: number[][] = new Array(len)
    .fill(0)
    .map((item, index) => [profits[index], capital[index]])
  temp.sort((a, b) => a[1] - b[1])
  const maxArr: number[] = []
  const binarySearch = (n: number): void => {
    const len = maxArr.length
    if (len === 0) {
      maxArr.push(n)
      return
    }
    let left = 0,
      right = len - 1
    while (left <= right) {
      const mid = Math.floor((right + left) / 2)
      if (maxArr[mid] < n) {
        left = mid + 1
      } else if (maxArr[mid] === n) {
        maxArr.splice(mid, 0, n)
        return
      } else {
        right = mid - 1
      }
    }
    maxArr.splice(left, 0, n)
  }
  let z = 0
  while (k > 0) {
    while (z < len && temp[z][1] <= w) {
      binarySearch(temp[z][0])
      z++
    }
    if (maxArr.length === 0) break
    w += maxArr.pop()!
    k--
  }
  return w
}
