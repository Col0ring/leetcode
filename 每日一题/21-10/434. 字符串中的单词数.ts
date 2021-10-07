export function countSegments(s: string): number {
  let segmentCount = 0

  for (let i = 0; i < s.length; i++) {
    if ((i === 0 || s[i - 1] === ' ') && s[i] !== ' ') {
      segmentCount++
    }
  }

  return segmentCount
}
