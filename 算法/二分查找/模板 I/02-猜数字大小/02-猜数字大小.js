/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
// 暴力 超时
// var guessNumber = function (n) {
//   for (let i = 1; i < n; i++)
//     if (guess(i) == 0) {
//       return i
//     }
//   return n
// }

// 二分
var guessNumber = function (n) {
  // 1 到 10
  let low = 1
  let high = n
  while (low <= high) {
    const mid = Math.floor((high + low) / 2)
    const res = guess(mid)
    if (res === 0) return mid
    else if (res < 0) high = mid - 1
    else low = mid + 1
  }
  return -1
}
