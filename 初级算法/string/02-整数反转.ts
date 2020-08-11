export function reverse(x: number): number {
  let symbol = false
  if (x < 0) {
    symbol = true
    x = -x
  }
  const res = +x.toString().split('').reverse().join('')
  if (res > 2 ** 31 - 1 || -res < -(2 ** 31)) {
    return 0
  }
  return symbol ? -res : res
}
