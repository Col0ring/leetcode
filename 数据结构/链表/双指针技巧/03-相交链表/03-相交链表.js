/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 *
 */
/*
    pA:1->2->3->4->5->6->null->9->5->6->null
    pB:9->5->6->null->1->2->3->4->5->6->null
*/
var getIntersectionNode = function (headA, headB) {
  if (headA == null || headB == null) return null
  let pA = headA
  let pB = headB
  // 两者都会抛 a+b的路程，如果相交则会在交点相遇，否则是 null
  while (pA !== pB) {
    pA = !pA ? headB : pA.next
    pB = !pB ? headA : pB.next
  }
  return pA
}
