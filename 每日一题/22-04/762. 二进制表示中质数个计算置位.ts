export function countPrimeSetBits(left: number, right: number): number {
  let ans = 0
  for (let x = left; x <= right; ++x) {
    if (isPrime(bitCount(x))) {
      ++ans
    }
  }
  return ans
}

const isPrime = (x: number) => {
  if (x < 2) {
    return false
  }
  for (let i = 2; i * i <= x; ++i) {
    if (x % i === 0) {
      return false
    }
  }
  return true
}

const bitCount = (x: number) => {
  return x.toString(2).split('0').join('').length
}
