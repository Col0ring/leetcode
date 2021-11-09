// 暴力 dfs
export function findMinStep(board: string, hand: string): number {
  let times = Number.MAX_SAFE_INTEGER
  const memo = new Set<string>()

  function isRepeat(arr: string[]): boolean {
    if (arr.length < 3) return false
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] === arr[i - 1] && arr[i - 1] === arr[i - 2]) {
        return true
      }
    }
    return false
  }

  function deleteRepeat(tmp: string[]) {
    const result = [...tmp]
    for (let k = 0; k < result.length - 2; k++) {
      let num = 1
      let d = 1
      while (k + d < result.length && result[k] === result[k + d]) {
        num++
        d++
      }
      if (num >= 3) {
        result.splice(k, num)
        break
      }
    }
    return result
  }

  function dfs(x: string, y: string) {
    const serialize = `${x}-${y}`
    if (memo.has(serialize)) return
    memo.add(serialize)
    if (!x.length) {
      times = Math.min(times, hand.length - y.length)
      return
    }
    if (!y.length) return
    // have board && hand
    // insert
    // every ball can be insert every place
    const arr = x.split('')
    for (let j = 0; j < y.length; j++) {
      for (let i = 0; i <= arr.length; i++) {
        let tmp = [...arr]
        tmp.splice(i, 0, y[j])
        // when there have some repeat balls
        while (isRepeat(tmp)) {
          tmp = deleteRepeat(tmp)
        }
        const nextHand = y.split('')
        nextHand.splice(j, 1)
        // to next
        dfs(tmp.join(''), nextHand.join(''))
      }
    }

    // arrange
  }

  dfs(board, hand)
  return times === Number.MAX_SAFE_INTEGER ? -1 : times
}
