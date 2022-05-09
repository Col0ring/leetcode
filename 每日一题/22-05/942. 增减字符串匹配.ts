export function diStringMatch(s: string): number[] {
  let n = s.length,
    lo = 0,
    hi = n
  const perm: number[] = new Array(n + 1).fill(0)
  for (let i = 0; i < n; ++i) {
    perm[i] = s[i] === 'I' ? lo++ : hi--
  }
  perm[n] = lo
  return perm
}
