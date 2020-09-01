// 取巧
// export function isNumber(s: string): boolean {
//   if (Number.isNaN(+s) || !s.trim()) {
//     return false
//   } else {
//     return true
//   }
// }

// 正则
// export function isNumber(s: string): boolean {
//   return /^[+-]?(\d+(\.\d*)?|(\.\d+))(e[+-]?\d+)?$/i.test(s.trim())
// }

// 有限状态自动机
export function isNumber(s: string): boolean {
  const states = [
    new Map([
      [' ', 0],
      ['s', 1],
      ['d', 2],
      ['.', 4]
    ]),
    new Map([
      ['d', 2],
      ['.', 4]
    ]),
    new Map([
      ['d', 2],
      ['.', 3],
      ['e', 5],
      [' ', 8]
    ]),
    new Map([
      ['d', 3],
      ['e', 5],
      [' ', 8]
    ]),
    new Map([['d', 3]]),
    new Map([
      ['s', 6],
      ['d', 7]
    ]),
    new Map([['d', 7]]),
    new Map([
      ['d', 7],
      [' ', 8]
    ]),
    new Map([[' ', 8]])
  ]
  let p = 0,
    t
  for (let c of s) {
    if ('0' <= c && c <= '9') t = 'd'
    else if (c == '+' || c == '-') t = 's'
    else if (c == 'e' || c == 'E') t = 'e'
    else if (c == '.' || c == ' ') t = c
    else t = '?'
    if (!states[p].has(t)) {
      return false
    }
    p = states[p].get(t)!
  }
  return p == 2 || p == 3 || p == 7 || p == 8
}
