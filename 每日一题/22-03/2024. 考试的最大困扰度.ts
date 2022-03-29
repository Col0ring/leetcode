// 滑动窗口
export function maxConsecutiveAnswers(answerKey: string, k: number): number {
  return Math.max(
    maxConsecutiveChar(answerKey, k, 'T'),
    maxConsecutiveChar(answerKey, k, 'F')
  )
}

const maxConsecutiveChar = (answerKey: string, k: number, ch: string) => {
  const n = answerKey.length
  let ans = 0
  for (let left = 0, right = 0, sum = 0; right < n; right++) {
    sum += answerKey.charAt(right) !== ch ? 1 : 0
    while (sum > k) {
      sum -= answerKey[left++] !== ch ? 1 : 0
    }
    ans = Math.max(ans, right - left + 1)
  }
  return ans
}
