// 一次遍历
export function canCompleteCircuit(gas: number[], cost: number[]): number {
  const n = gas.length
  let i = 0
  while (i < n) {
    let sumOfGas = 0,
      sumOfCost = 0
    let cnt = 0
    while (cnt < n) {
      // 循环
      const j = (i + cnt) % n
      sumOfGas += gas[j]
      sumOfCost += cost[j]
      if (sumOfCost > sumOfGas) {
        break
      }
      cnt++
    }
    if (cnt === n) {
      return i
    } else {
      i = i + cnt + 1
    }
  }
  return -1
}
