export function findJudge(n: number, trust: number[][]): number {
  const input: number[] = new Array(n + 1).fill(0)
  const output: number[] = new Array(n + 1).fill(0)
  for (const [a, b] of trust) {
    output[a]++
    input[b]++
  }
  for (let i = 1; i <= n; i++) {
    if (input[i] === n - 1 && output[i] === 0) {
      return i
    }
  }

  return -1
}
