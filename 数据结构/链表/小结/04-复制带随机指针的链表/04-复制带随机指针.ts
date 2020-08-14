class Node {
  constructor(
    public val: number = 0,
    public next: Node | null = null,
    public random: Node | null = null
  ) {}
}

export function copyRandomList(head: Node | null): Node | null {
  if (!head) {
    return null
  }
  let copy: Node | null = head
  while (copy) {
    const newNode: Node = new Node(copy.val)
    newNode.next = copy.next
    copy.next = newNode
    copy = newNode.next
  }
  copy = head
  while (copy) {
    // 因为是克隆，所以克隆的random指针指向克隆的节点（也就是指向节点的下一个节点）
    copy!.next!.random = copy.random ? copy.random.next : null
    copy = copy!.next!.next
  }
  let oldList = head
  let newList = head.next
  let newHead = head.next
  while (oldList) {
    oldList.next = oldList!.next!.next
    newList!.next = newList!.next ? newList!.next.next : null
    oldList = oldList.next!
    newList = newList!.next
  }
  return newHead
}
