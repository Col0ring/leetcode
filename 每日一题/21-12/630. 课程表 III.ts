export function scheduleCourse(courses: number[][]): number {
  courses.sort((a, b) => a[1] - b[1])

  const queue: number[] = []
  let count = 0

  for (let i = 0; i < courses.length; i++) {
    const value = courses[i][0]
    if (count + value <= courses[i][1]) {
      queue.push(value)
      queue.sort((a, b) => a - b) // 始终保持耗时队列为从小到大
      count += value
      continue
    }

    // 如果超时了，则取出最大的一个进行替换

    if (queue[queue.length - 1] >= value) {
      count -= queue.pop()!
      count += value
      queue.push(value)
      queue.sort((a, b) => a - b)
      continue
    }
  }

  return queue.length
}
