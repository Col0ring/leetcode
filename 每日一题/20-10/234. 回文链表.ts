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

// export function isPalindrome(head: ListNode | null): boolean {
//   const vals: number[] = []
//   let currentNode = head
//   // 像将值全部放入数组然后用双指针
//   while (currentNode) {
//     vals.push(currentNode.val)
//     currentNode = currentNode.next
//   }

//   let front = 0
//   let back = vals.length - 1
//   while (front < back) {
//     if (vals[front] !== vals[back]) {
//       return false
//     }
//     front++
//     back--
//   }
//   return true
// }

// 递归
export function isPalindrome(head: ListNode | null): boolean {
  let frontPointer = head
  // 从最后一个开始和第一个比较
  const recursivelyCheck = (currentNode: ListNode | null) => {
    if (currentNode) {
      if (!recursivelyCheck(currentNode.next)) return false
      if (currentNode.val !== frontPointer!.val) return false
      frontPointer = frontPointer!.next
    }
    return true
  }
  return recursivelyCheck(head)
}
