export function canIWin(
  maxChoosableInteger: number,
  desiredTotal: number
): boolean {
  const memo = new Map<number, boolean>()
  const dfs = (
    maxChoosableInteger: number,
    usedNumbers: number,
    desiredTotal: number,
    currentTotal: number
  ): boolean => {
    if (!memo.has(usedNumbers)) {
      let res = false
      for (let i = 0; i < maxChoosableInteger; i++) {
        if (((usedNumbers >> i) & 1) === 0) {
          if (i + 1 + currentTotal >= desiredTotal) {
            res = true
            break
          }
          if (
            !dfs(
              maxChoosableInteger,
              usedNumbers | (1 << i),
              desiredTotal,
              currentTotal + i + 1
            )
          ) {
            res = true
            break
          }
        }
      }
      memo.set(usedNumbers, res)
    }
    return !!memo.get(usedNumbers)
  }
  if (((1 + maxChoosableInteger) * maxChoosableInteger) / 2 < desiredTotal) {
    return false
  }
  return dfs(maxChoosableInteger, 0, desiredTotal, 0)
}
