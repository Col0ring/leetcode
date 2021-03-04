// 简单方法，直接计算
// export function countBits(num: number): number[] {
//   const ans: number[] = []
//   for (let i = 0; i <= num; i++) {
//     let ones = 0
//     let j = i
//     while (j > 0) {
//       // 按位与运算（&）的一个性质是：对于任意整数 x，令 x=x &(x-1)，该运算将 xx 的二进制表示的最后一个 1 变成 0。因此，对 x 重复该操作，直到 x 变成 0，则操作次数即为 x 的「一比特数」。
//       j &= j - 1
//       // 一比特数
//       ones++
//     }
//     ans.push(ones)
//   }
//   return ans
// }

// 最高有效位
// export function countBits(num: number): number[] {
//   const ans: number[] = new Array(num + 1).fill(0)
//   let highBit = 0
//   for (let i = 1; i <= num; i++) {
//     // 正整数 y 是 2 的整数次幂，当且仅当 y &(y-1)=0
//     if ((i & (i - 1)) === 0) {
//     // 当遍历到的数是 2 的整数次幂时，需要更新最高有效位
//       highBit = i
//     }
//     ans[i] = ans[i - highBit] + 1
//   }
//   return ans
// }

// 最低有效位
// export function countBits(num: number): number[] {
//   const bits = new Array(num + 1).fill(0)
//   for (let i = 1; i <= num; i++) {
//     // (i & 1) === i % 2
//     // i >> 1 = Math.floor(x / 2)
//     // 如果 x 是奇数， bits[x] = bits[x/2]
//     // 如果 x 是偶数， bits[x] = bits[x/2] + 1
//     bits[i] = bits[i >> 1] + (i & 1)
//   }
//   return bits
// }

// 最低设置位
export function countBits(num: number): number[] {
  const bits = new Array(num + 1).fill(0)
  for (let i = 1; i <= num; i++) {
    bits[i] = bits[i & (i - 1)] + 1
  }
  return bits
}
