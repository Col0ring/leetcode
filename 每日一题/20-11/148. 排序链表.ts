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

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// sort
// export function sortList(head: ListNode | null): ListNode | null {
//   if (head === null) {
//     return null
//   }
//   const r: ListNode[] = []
//   while (head) {
//     r.push(head)
//     let tmp: ListNode | null = head.next
//     head.next = null
//     head = tmp
//   }
//   r.sort((a, b) => a.val - b.val).reduce((p, v) => (p.next = v))
//   return r[0]
// }

// 自顶而下归并
export function sortList(head: ListNode | null): ListNode | null {
  const merge = (
    head1: ListNode | null,
    head2: ListNode | null
  ): ListNode | null => {
    const dummyHead = new ListNode(0)
    let temp = dummyHead,
      temp1 = head1,
      temp2 = head2
    while (temp1 !== null && temp2 !== null) {
      if (temp1.val <= temp2.val) {
        temp.next = temp1
        temp1 = temp1.next
      } else {
        temp.next = temp2
        temp2 = temp2.next
      }
      temp = temp.next
    }
    if (temp1 !== null) {
      temp.next = temp1
    } else if (temp2 !== null) {
      temp.next = temp2
    }
    return dummyHead.next
  }

  const toSortList = (
    head: ListNode | null,
    tail: ListNode | null
  ): ListNode | null => {
    if (head === null) {
      return head
    }
    // 只有一个
    if (head.next === tail) {
      head.next = null
      return head
    }
    let slow = head,
      fast = head
    // 双指针
    while (fast !== tail) {
      slow = slow.next!
      fast = fast.next!
      if (fast !== tail) {
        fast = fast.next!
      }
    }
    // 当快指针到达链表末尾时，慢指针指向的链表节点即为链表的中点。
    const mid = slow
    // 对两个子链表分别排序
    // 将两个排序后的子链表合并，得到完整的排序后的链表
    return merge(toSortList(head, mid), toSortList(mid, tail))
  }

  return toSortList(head, null)
}
