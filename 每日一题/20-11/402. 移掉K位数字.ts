export function removeKdigits(num: string, k: number): string {
  const stk: string[] = []
  for (const digit of num) {
    while (stk.length > 0 && stk[stk.length - 1] > digit && k) {
      stk.pop()
      k -= 1
    }
    stk.push(digit)
  }

  for (; k > 0; --k) {
    stk.pop()
  }

  let ans = ''
  let isLeadingZero = true
  for (const digit of stk) {
    if (isLeadingZero && digit === '0') {
      continue
    }
    isLeadingZero = false
    ans += digit
  }
  return ans === '' ? '0' : ans
}
