// hash
// export function isHappy(n: number): boolean {
//   const seen = new Set<number>()
//   while (n !== 1 && !seen.has(n)) {
//     seen.add(n)
//     let total = 0
//     while (n > 0) {
//       // 从后往前
//       const d = n % 10
//       n = Math.floor(n / 10)
//       total += d * d
//     }
//     n = total
//   }
//   return n === 1
// }

// 快慢指针
export function isHappy(n: number): boolean {
  const getNext = (n: number) => {
    let totalSum = 0
    while (n > 0) {
      const d = n % 10
      n = Math.floor(n / 10)
      totalSum += d * d
    }
    return totalSum
  }
  let slow = n
  let fast = getNext(n)
  while (fast !== 1 && slow !== fast) {
    slow = getNext(slow)
    fast = getNext(getNext(fast))
  }
  return fast === 1
}
