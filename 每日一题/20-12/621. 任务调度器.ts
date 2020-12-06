export function leastInterval(tasks: string[], n: number): number {
  if (n === 0) return tasks.length
  let i = -1,
    maxCount = 0
  const h = new Uint16Array(26)
  while (++i < tasks.length) h[tasks[i].charCodeAt(0) - 65]++
  h.sort((a, b) => b - a)
  while (h[maxCount + 1] === h[maxCount++]) {}
  return Math.max((h[0] - 1) * (n + 1) + maxCount, i)
}
