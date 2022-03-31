export function selfDividingNumbers(left: number, right: number): number[] {
  const ans: number[] = []
  for (let i = left; i <= right; i++) {
    if (isSelfDividing(i)) {
      ans.push(i)
    }
  }
  return ans
}

const isSelfDividing = (num: number) => {
  let temp = num
  while (temp > 0) {
    const digit = temp % 10
    if (digit === 0 || num % digit !== 0) {
      return false
    }
    temp = Math.floor(temp / 10)
  }
  return true
}
