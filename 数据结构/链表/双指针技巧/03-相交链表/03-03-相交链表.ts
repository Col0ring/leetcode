class ListNode {
  val = 0
  next: ListNode | null = null
  constructor(val: number) {
    this.val = val
  }
}
/*
    pA:1->2->3->4->5->6->null->9->5->6->null
    pB:9->5->6->null->1->2->3->4->5->6->null
*/
export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (headA == null || headB == null) return null
  let pA: ListNode | null = headA
  let pB: ListNode | null = headB
  // 两者都会抛 a+b的路程，如果相交则会在交点相遇，否则是 null
  while (pA !== pB) {
    pA = !pA ? headB : pA.next
    pB = !pB ? headA : pB.next
  }
  return pA
}
