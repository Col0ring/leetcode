/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 哈希
// var hasCycle = function (head) {
//   const setHelper = new Set()
//   while (head) {
//     if (setHelper.has(head)) {
//       return true
//     } else {
//       setHelper.add(head)
//     }
//     head = head.next
//   }
//   return false
// }

// 双指针
var hasCycle = function (head) {
  if (!head || !head.next) {
    return false
  }
  // 如果是环，快指针最终会追上慢指针
  let slow = head
  let fast = head.next
  while (slow !== fast) {
    if (!fast || !fast.next) {
      return false
    }
    slow = slow.next
    fast = fast.next.next
  }
  return true
}
