export function minSwapsCouples(row: number[]): number {
  const n = row.length
  const tot = n / 2
  const f = new Array(tot).fill(0).map((element, index) => index)

  for (let i = 0; i < n; i += 2) {
    const l = Math.floor(row[i] / 2)
    const r = Math.floor(row[i + 1] / 2)
    add(f, l, r)
  }
  const map = new Map()
  for (let i = 0; i < tot; i++) {
    const fx = getf(f, i)
    if (map.has(fx)) {
      map.set(fx, map.get(fx) + 1)
    } else {
      map.set(fx, 1)
    }
  }

  let ret = 0
  for (const [f, sz] of map.entries()) {
    ret += sz - 1
  }
  return ret
}

const getf = (f: number[], x: number): number => {
  if (f[x] === x) {
    return x
  }
  const newf = getf(f, f[x])
  f[x] = newf
  return newf
}

const add = (f: number[], x: number, y: number) => {
  const fx = getf(f, x)
  const fy = getf(f, y)
  f[fx] = fy
}
