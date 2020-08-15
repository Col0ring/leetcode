/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
class ListNode {
  next: ListNode | null = null
  constructor(public val: number) {}
}
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
export function deleteNode(node: ListNode): void {
  node.val = node.next!.val
  node.next = node.next!.next
}
