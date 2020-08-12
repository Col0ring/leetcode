// 大数据（题目说了不能用，这里提供一种思路
// function multiply(num1: string, num2: string): string {
//   return BigInt(num1) * BigInt(num2) + ''
// }

// 高精度乘法
export function multiply(num1: string, num2: string): string {
  if (num1 === '0' || num2 === '0') {
    return '0'
  }
  let ansArr: number[] = []
  for (let i = 0; i < num1.length; i++) {
    // 从后往前
    const n1 = num1[num1.length - 1 - i]
    for (let j = 0; j < num2.length; j++) {
      const n2 = num2[num2.length - 1 - j]
      const current = ansArr[i + j] ? ansArr[i + j] + +n1 * +n2 : +n1 * +n2
      ansArr[i + j] = current % 10
      if (current >= 10) {
        ansArr[i + j + 1] = ansArr[i + j + 1]
          ? ansArr[i + j + 1] + Math.floor(current / 10)
          : Math.floor(current / 10)
      }
    }
  }
  return ansArr.reverse().join('')
}
