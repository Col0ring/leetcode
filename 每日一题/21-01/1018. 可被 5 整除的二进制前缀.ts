export function prefixesDivBy5(A: number[]): boolean[] {
  const list: boolean[] = []
  let prefix = 0
  const length = A.length
  for (let i = 0; i < length; i++) {
    prefix = ((prefix << 1) + A[i]) % 5
    list.push(prefix === 0)
  }
  return list
}
