export function isPerfectSquare(num: number): boolean {
  const x = Math.floor(Math.sqrt(num))
  return x * x === num
}
