export function eatenApples(apples: number[], days: number[]): number {
  let reuslt = 0
  let date = 1
  let queue: number[][] = []
  for (let i = 0; i < apples.length; i++) {
    if (apples[i] != 0 && days[i] != 0) {
      queue.push([apples[i], i + days[i]])
    }
    queue.sort((a, b) => {
      return a[1] - b[1]
    })
    if (queue[0]) {
      queue[0][0]--
      reuslt++
      while (queue[0] && (queue[0][0] == 0 || queue[0][1] <= date)) {
        queue.shift()
      }
    }
    date++
  }
  date--
  while (queue.length) {
    if (queue[0][1] > date) {
      let value = Math.min(queue[0][0], queue[0][1] - date)
      date = date + value
      reuslt = reuslt + value
    }
    queue.shift()
  }
  return reuslt
}
