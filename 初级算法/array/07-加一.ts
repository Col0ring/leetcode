// function plusOne(digits: number[]): number[] {
//   return add(digits, digits.length - 1)
// }

// function add(digits: number[], index: number): number[] {
//   const res: number[] = []
//   if (digits[index] === 9) {
//     if (index === 0) {
//       res.unshift(1, 0)
//     } else {
//       res.unshift(...add(digits, index - 1), 0)
//     }
//   } else {
//     res.unshift(...digits.slice(0, index), digits[index] + 1)
//   }
//   return res
// }

// 循环
export function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++
    digits[i] %= 10
    if (digits[i] != 0) {
      return digits
    }
  }
  digits.unshift(1)
  return digits
}
