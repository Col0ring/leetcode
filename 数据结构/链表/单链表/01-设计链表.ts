class MyListNode {
  val: number = 0
  next: MyListNode | null = null
  constructor(val: number = 0) {
    this.val = val
  }
}

export class MyLinkedList {
  size: number = 0
  head: MyListNode
  constructor() {
    this.head = new MyListNode()
  }

  get(index: number): number {
    if (index < 0 || index >= this.size) {
      return -1
    }
    let current = this.head
    for (let i = 0; i < index + 1; i++) {
      current = current.next!
    }
    return current.val
  }

  addAtHead(val: number): void {
    this.addAtIndex(0, val)
  }

  addAtTail(val: number): void {
    this.addAtIndex(this.size, val)
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.size) {
      return
    }
    if (index < 0) {
      index = 0
    }
    let preNode = this.head
    for (let i = 0; i < index; i++) {
      preNode = preNode.next!
    }
    const newNode = new MyListNode(val)
    newNode.next = preNode.next
    preNode.next = newNode
    this.size++
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) {
      return
    }
    let preNode = this.head
    for (let i = 0; i < index; i++) {
      preNode = preNode.next!
    }
    preNode.next = preNode.next ? preNode.next.next : null
    this.size--
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
