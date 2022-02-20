export function isOneBitCharacter(bits: number[]): boolean {
  let i = 0,
    n = bits.length
  while (i < n - 1) {
    i += bits[i] + 1
  }
  return i === n - 1
}
