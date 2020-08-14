/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  let copy = head
  while (copy) {
    let next = copy.next
    if (copy.child) {
      let node = flatten(copy.child)
      copy.child = null
      copy.next = node
      node.prev = copy

      let end = node
      while (end.next) {
        end = end.next
      }
      end.next = next
      if (next) {
        next.prev = end
      }
    }
    copy = next
  }
  return head
}
