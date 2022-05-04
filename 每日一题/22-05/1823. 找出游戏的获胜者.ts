export function findTheWinner(n: number, k: number): number {
  const queue: number[] = []
  for (let i = 1; i <= n; i++) {
    queue.push(i)
  }
  while (queue.length > 1) {
    for (let i = 1; i < k; i++) {
      queue.push(queue.shift()!)
    }
    queue.shift()
  }
  return queue[0]
}
