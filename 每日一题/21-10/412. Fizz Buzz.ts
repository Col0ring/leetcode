export function fizzBuzz(n: number): string[] {
  const answer: string[] = []
  for (let i = 1; i <= n; i++) {
    const sb: string[] = []
    if (i % 3 === 0) {
      sb.push('Fizz')
    }
    if (i % 5 === 0) {
      sb.push('Buzz')
    }
    if (sb.length === 0) {
      sb.push(`${i}`)
    }
    answer.push(sb.join(''))
  }
  return answer
}
