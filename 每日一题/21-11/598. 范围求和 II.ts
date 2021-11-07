export function maxCount(m: number, n: number, ops: number[][]): number {
  let mina = m,
    minb = n
  for (const op of ops) {
    mina = Math.min(mina, op[0])
    minb = Math.min(minb, op[1])
  }
  return mina * minb
}
