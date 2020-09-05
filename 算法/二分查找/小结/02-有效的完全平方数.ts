export function isPerfectSquare(num: number): boolean {
  if (num === 1 || num === 0) {
    return true
  }
  let left = 1
  let right = num
  while (left <= right) {
    let mid = (left + right) >> 1
    let number = mid * mid
    if (number === num) {
      return true
    }
    if (number > num) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return false
}
