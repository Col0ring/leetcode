export function intToRoman(num: number): string {
  // 用keys和values这两个数组记录数组和字母,之间存在一一对应关系
  const keys = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const values = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I'
  ]
  let ans = ''
  let n = num
  for (let i = 0; i < keys.length; i++) {
    while (n >= keys[i]) {
      //这里只能写while循环,写了if只会执行一次
      n -= keys[i]
      ans += values[i]
    }
  }
  return ans
}
