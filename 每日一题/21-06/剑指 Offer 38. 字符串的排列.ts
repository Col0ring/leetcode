export function permutation(s: string): string[] {
  const rec: string[] = [],
    vis: boolean[] = []
  const n = s.length
  const arr = Array.from(s).sort()
  const perm: string[] = []
  const backtrack = (arr: string[], i: number, n: number, perm: string[]) => {
    if (i === n) {
      rec.push(perm.toString())
      return
    }
    for (let j = 0; j < n; j++) {
      if (vis[j] || (j > 0 && !vis[j - 1] && arr[j - 1] === arr[j])) {
        continue
      }
      vis[j] = true
      perm.push(arr[j])
      backtrack(arr, i + 1, n, perm)
      perm.pop()
      vis[j] = false
    }
  }

  backtrack(arr, 0, n, perm)
  const size = rec.length
  const recArr = new Array(size).fill(0)
  for (let i = 0; i < size; i++) {
    recArr[i] = rec[i].split(',').join('')
  }
  return recArr
}
