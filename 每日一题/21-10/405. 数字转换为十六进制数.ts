// export function toHex(num: number): string {
//   if (num === 0) {
//     return '0'
//   }
//   const sb = []
//   for (let i = 7; i >= 0; i--) {
//     const val = (num >> (4 * i)) & 0xf
//     if (sb.length > 0 || val > 0) {
//       const digit =
//         val < 10
//           ? String.fromCharCode('0'.charCodeAt(0) + val)
//           : String.fromCharCode('a'.charCodeAt(0) + val - 10)
//       sb.push(digit)
//     }
//   }
//   return sb.join('')
// }

export function toHex(num: number): string {
  return num < 0 ? num.toString() : num.toString(16)
}
