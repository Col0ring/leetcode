export function licenseKeyFormatting(s: string, k: number): string {
  const str = s.toUpperCase().split('-').join('')
  const len = str.length
  if (len <= k) {
    return str
  }
  let n = len % k
  let ans = n === 0 ? '' : str.slice(0, n)
  for (let i = n; i < len; i += k) {
    ans += (ans ? '-' : '') + str.slice(i, i + k)
  }
  return ans
}
