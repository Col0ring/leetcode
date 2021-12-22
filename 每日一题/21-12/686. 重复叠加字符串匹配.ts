export function repeatedStringMatch(a: string, b: string): number {
  const lenA = a.length
  const lenB = b.length
  // 向上取整，确保从下标为 0 开始匹配能够包含 b
  let count = Math.ceil(lenB / lenA)
  // a 重复 count + 1 次，确保从比较靠后的下标开始匹配也能包含 b
  const aCopy = a.repeat(count + 1)

  const idx = aCopy.indexOf(b)
  if (idx === -1) return -1
  // 这里就是再比较一次上面的情况
  return idx + lenB > lenA * count ? count + 1 : count
}
