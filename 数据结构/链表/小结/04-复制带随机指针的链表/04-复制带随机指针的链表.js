/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) {
    return null
  }
  let copy = head
  while (copy) {
    const newNode = new Node(copy.val)
    newNode.next = copy.next
    copy.next = newNode
    copy = newNode.next
  }
  copy = head
  while (copy) {
    // 因为是克隆，所以克隆的random指针指向克隆的节点（也就是指向节点的下一个节点）
    copy.next.random = copy.random ? copy.random.next : null
    copy = copy.next.next
  }
  let oldList = head
  let newList = head.next
  let newHead = head.next
  while (oldList) {
    oldList.next = oldList.next.next
    newList.next = newList.next ? newList.next.next : null
    oldList = oldList.next
    newList = newList.next
  }
  return newHead
}
