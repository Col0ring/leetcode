// n % 3 = 1 就是 4 的冥
export function isPowerOfFour(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0 && n % 3 === 1
}
