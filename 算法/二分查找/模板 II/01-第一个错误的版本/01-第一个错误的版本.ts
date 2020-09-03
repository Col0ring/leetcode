/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
export function solution(isBadVersion: (version: number) => boolean) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n: number) {
    let left = 1
    let right = n
    while (left < right) {
      const mid = Math.floor((left + right) / 2)
      if (isBadVersion(mid)) {
        right = mid
      } else {
        left = mid + 1
      }
    }
    return left
  }
}
