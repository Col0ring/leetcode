export function slowestKey(
  releaseTimes: number[],
  keysPressed: string
): string {
  const n = releaseTimes.length
  let ans = keysPressed[0]
  let maxTime = releaseTimes[0]
  for (let i = 1; i < n; i++) {
    const key = keysPressed[i]
    const time = releaseTimes[i] - releaseTimes[i - 1]
    if (time > maxTime || (time === maxTime && key > ans)) {
      ans = key
      maxTime = time
    }
  }
  return ans
}
