export function romanToInt(s: string): number {
  let num = 0
  for (let i = 0; i < s.length; i++) {
    num += getNumber(s[i], s[i + 1])
  }
  return num
}

function getNumber(str1: string, str2: string): number {
  const str2num: { [s: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  const mapObj: { [s: string]: any } = {
    I: {
      options: ['V', 'X'],
      value: -1
    },
    X: {
      options: ['L', 'C'],
      value: -10
    },
    C: {
      options: ['D', 'M'],
      value: -100
    }
  }
  if (str2 && mapObj[str1] && mapObj[str1].options.includes(str2)) {
    return mapObj[str1].value
  }
  return str2num[str1]
}
