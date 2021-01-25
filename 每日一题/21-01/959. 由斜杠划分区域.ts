export function regionsBySlashes(grid: string[]): number {
  const n = grid.length
  const f = new Array(n * n * 4).fill(0).map((element, index) => {
    return index
  })
  const find = (f: number[], x: number): number => {
    if (f[x] === x) {
      return x
    }
    return find(f, f[x])
  }

  const merge = (f: number[], x: number, y: number) => {
    const fx = find(f, x),
      fy = find(f, y)
    f[fx] = fy
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const idx = i * n + j
      if (i < n - 1) {
        const bottom = idx + n
        merge(f, idx * 4 + 2, bottom * 4)
      }
      if (j < n - 1) {
        const right = idx + 1
        merge(f, idx * 4 + 1, right * 4 + 3)
      }
      if (grid[i][j] === '/') {
        merge(f, idx * 4, idx * 4 + 3)
        merge(f, idx * 4 + 1, idx * 4 + 2)
      } else if (grid[i][j] == '\\') {
        merge(f, idx * 4, idx * 4 + 1)
        merge(f, idx * 4 + 2, idx * 4 + 3)
      } else {
        merge(f, idx * 4, idx * 4 + 1)
        merge(f, idx * 4 + 1, idx * 4 + 2)
        merge(f, idx * 4 + 2, idx * 4 + 3)
      }
    }
  }

  let ret = 0
  f.forEach((element, index) => {
    if (element === index) {
      ret++
    }
  })
  return ret
}
