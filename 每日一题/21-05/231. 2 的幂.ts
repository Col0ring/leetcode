export function isPowerOfTwo(n: number): boolean {
  const BIG = 1 << 30
  return n > 0 && BIG % n === 0
}
