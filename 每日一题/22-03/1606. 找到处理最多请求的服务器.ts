export function busiestServers(
  k: number,
  arrival: number[],
  load: number[]
): number[] {
  const timeArr: number[] = new Array(k).fill(0) // 记录每个服务器所需要的时间
  const countArr: number[] = new Array(k).fill(0) //  记录每个服务器所请求的数量
  for (let i = 0; i < arrival.length; i++) {
    const index = i % k
    for (let j = 0; j < k; j++) {
      // 从i % k开始环形遍历一次
      if (timeArr[(j + index) % k] <= arrival[i]) {
        timeArr[(j + index) % k] = arrival[i] + load[i]
        countArr[(j + index) % k]++
        break
      }
    }
  }
  let max = 0
  for (let i = 0; i < k; i++) {
    max = Math.max(max, countArr[i])
  }
  const res = []
  for (let i = 0; i < k; i++) {
    if (countArr[i] === max) {
      res.push(i)
    }
  }
  return res
}
