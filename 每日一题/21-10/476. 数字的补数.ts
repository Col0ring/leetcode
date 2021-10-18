export function findComplement(num: number): number {
  const str = num.toString(2)
  let s = ''
  for (let i = 0; i < str.length; i++) {
    if (+str[i]) {
      s += '0'
    } else {
      s += '1'
    }
  }
  return parseInt(s, 2)
}
