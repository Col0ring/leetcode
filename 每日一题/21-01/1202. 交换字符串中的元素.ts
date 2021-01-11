// 查并集
export function smallestStringWithSwaps(s: string, pairs: number[][]): string {
  const fa = new Array(100010).fill(0)

  const find = (x: number): number => {
    return x === fa[x] ? x : (fa[x] = find(fa[x]))
  }

  const n = s.length
  for (let i = 0; i < n; i++) {
    fa[i] = i
  }
  for (let i = 0; i < pairs.length; ++i) {
    const x = pairs[i][0],
      y = pairs[i][1]
    const ux = find(x),
      uy = find(y)
    if (ux ^ uy) {
      fa[ux] = uy
    }
  }

  const vec = new Array(n).fill(0).map(() => new Array())
  for (let i = 0; i < n; i++) {
    fa[i] = find(i)
    vec[fa[i]].push(s[i])
  }

  for (let i = 0; i < n; ++i) {
    if (vec[i].length > 0) {
      vec[i].sort((a, b) => a.charCodeAt() - b.charCodeAt())
    }
  }
  const p: number[] = new Array(n).fill(0)
  let ans: number[] = []
  for (let i = 0; i < n; ++i) {
    ans.push(1)
  }

  for (let i = 0; i < n; ++i) {
    ans[i] = vec[fa[i]][p[fa[i]]]
    p[fa[i]]++
  }

  return ans.join('')
}
