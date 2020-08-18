/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export function sortedListToBST(head: ListNode | null): TreeNode | null {
  if (!head) {
    return null
  }
  if (!head.next) {
    return new TreeNode(head.val)
  }
  // 快慢指针找中间节点
  let fast: ListNode | null = head
  let slow: ListNode | null = head
  let pre: ListNode | null = null
  while (fast && fast.next) {
    fast = fast.next.next
    pre = slow
    slow = slow!.next
  }
  // slow 为中点，pre为左子树，pre.next就是slow，所以要为空
  // 分割出左链表，用于构造本结点的左子树

  pre!.next = null
  // 分割出右链表，用于构造本结点的右子树
  const rightList = slow!.next
  const root = new TreeNode(slow!.val)
  // head 其实已经呗平分断开了
  root.left = sortedListToBST(head)
  root.right = sortedListToBST(rightList)
  return root
}
