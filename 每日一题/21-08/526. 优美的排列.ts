export function countArrangement(n: number): number {
  const vis: boolean[] = new Array(n + 1).fill(false)
  const match: number[][] = new Array(n + 1).fill(0).map(() => [])
  let num = 0

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i % j === 0 || j % i === 0) {
        match[i].push(j)
      }
    }
  }

  const backtrack = (index: number, n: number) => {
    if (index === n + 1) {
      num++
      return
    }
    for (const x of match[index]) {
      if (!vis[x]) {
        vis[x] = true
        backtrack(index + 1, n)
        vis[x] = false
      }
    }
  }

  backtrack(1, n)
  return num
}
