export function groupAnagrams(strs: string[]): string[][] {
  const ans: string[][] = []
  const mapHelper = new Map<string, string[]>()
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i].split('').sort().join('')
    // 因为不会有重复的字符
    if (mapHelper.has(str)) {
      mapHelper.get(str)?.push(strs[i])
    } else {
      mapHelper.set(str, [strs[i]])
    }
  }
  for (const [, arr] of mapHelper) {
    ans.unshift(arr)
  }
  return ans
}
