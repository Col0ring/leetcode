class ListNode {
  val = 0
  next: ListNode | null = null
  constructor(val: number) {
    this.val = val
  }
}

// 哈希
// function detectCycle(head: ListNode | null) {
//   const setHelper = new Set<ListNode>()
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
export function detectCycle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return null
  }
  const getIntersect = (head: ListNode) => {
    let tortoise = head
    let hare = head
    while (hare !== null && hare.next !== null) {
      tortoise = tortoise.next!
      hare = hare.next.next!
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
    ptr1 = ptr1.next!
    ptr2 = ptr2.next!
  }
  return ptr2
}
