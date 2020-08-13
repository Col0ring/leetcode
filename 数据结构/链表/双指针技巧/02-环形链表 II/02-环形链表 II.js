/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 哈希
// var detectCycle = function (head) {
//   const setHelper = new Set()
//   while (head) {
//     if (setHelper.has(head)) {
//       return head
//     } else {
//       setHelper.add(head)
//     }
//     head = head.next
//   }
//   return null
// }

// 双指针
var detectCycle = function (head) {
  if (!head || !head.next) {
    return null
  }
  const getIntersect = (head) => {
    let tortoise = head
    let hare = head
    while (hare !== null && hare.next !== null) {
      tortoise = tortoise.next
      hare = hare.next.next
      if (tortoise === hare) {
        return tortoise
      }
    }

    return null
  }
  const intersect = getIntersect(head)

  if (!intersect) {
    return null
  }
  let ptr1 = head
  let ptr2 = intersect
  while (ptr1 !== ptr2) {
    ptr1 = ptr1.next
    ptr2 = ptr2.next
  }
  return ptr2
}
