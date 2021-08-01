// 二分 + 分治
export function getSkyline(buildings: number[][]): number[][] {
  // 获取到所有顶点从小到大排序
  const texts = []
  for (let i = 0; i < buildings.length; i++) {
    const [s, e, h] = buildings[i]
    texts.push([s, h, 0], [e, h, 1])
  }
  texts.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1
    } else if (a[0] > b[0]) {
      return 1
    } else {
      if (a[2] === 0 && b[2] === 0) {
        return b[1] - a[1]
      } else if (a[2] === 1 && b[2] === 1) {
        return a[1] - b[1]
      } else {
        if (a[2] === 0) {
          return -1
        } else {
          return 1
        }
      }
    }
  })

  const pq: number[] = []
  let max = 0
  const result: number[][] = []

  const bsEnd = (arr: number[], n: number) => {
    let lo = 0,
      hi = arr.length - 1
    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2)
      if (arr[mid] < n) {
        lo = mid + 1
      } else {
        hi = mid
      }
    }
    return hi
  }

  const insert = (n: number) => {
    if (pq.length === 0 || n >= pq[pq.length - 1]) {
      pq.push(n)
    } else {
      pq.splice(bsEnd(pq, n), 0, n)
    }
  }

  const remove = (n: number) => {
    pq.splice(bsEnd(pq, n), 1)
  }

  const getMax = () => {
    if (pq.length === 0) {
      return 0
    }
    return pq[pq.length - 1]
  }

  for (let i = 0; i < texts.length; i++) {
    const [x, y, state] = texts[i]
    if (state === 0) {
      insert(y)
      if (y > max) {
        max = y
        result.push([x, y])
      }
    } else {
      remove(y)
      const curMax = getMax()
      if (y === max && curMax !== max) {
        max = curMax
        result.push([x, max])
      }
    }
  }

  return result
}
