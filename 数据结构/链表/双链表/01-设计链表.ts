// 本题使用双链表设计
class MyListNode {
  val: number = 0
  prev: MyListNode | null = null
  next: MyListNode | null = null
  constructor(val: number = 0) {
    this.val = val
  }
}

export class MyLinkedList {
  size: number = 0
  head: MyListNode
  tail: MyListNode
  constructor() {
    this.head = new MyListNode()
    this.tail = new MyListNode()
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  get(index: number): number {
    if (index < 0 || index >= this.size) {
      return -1
    }
    let current = this.head
    if (index + 1 < this.size - index) {
      for (let i = 0; i < index + 1; i++) {
        current = current.next!
      }
    } else {
      current = this.tail
      for (let i = 0; i < this.size - index; i++) {
        current = current.prev!
      }
    }
    return current.val
  }

  addAtHead(val: number): void {
    const pred = this.head
    const succ = this.head.next
    ++this.size
    const newNode = new MyListNode(val)
    newNode.prev = pred
    newNode.next = succ
    pred.next = newNode
    succ!.prev = newNode
  }

  addAtTail(val: number): void {
    const succ = this.tail
    const pred = this.tail.prev
    ++this.size
    const newNode = new MyListNode(val)
    newNode.prev = pred
    newNode.next = succ
    pred!.next = newNode
    succ.prev = newNode
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.size) {
      return
    }
    if (index < 0) {
      index = 0
    }
    let pred: MyListNode | null = null
    let succ: MyListNode | null = null
    if (index < this.size - index) {
      pred = this.head
      for (let i = 0; i < index; i++) pred = pred!.next
      succ = pred!.next
    } else {
      succ = this.tail
      for (let i = 0; i < this.size - index; ++i) succ = succ!.prev
      pred = succ!.prev
    }

    const newNode = new MyListNode(val)
    newNode.prev = pred
    newNode.next = succ
    pred!.next = newNode
    succ!.prev = newNode
    this.size++
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) {
      return
    }
    let pred: MyListNode | null = null
    let succ: MyListNode | null = null
    if (index < this.size - index) {
      pred = this.head
      for (let i = 0; i < index; i++) pred = pred!.next
      succ = pred!.next!.next
    } else {
      succ = this.tail
      for (let i = 0; i < this.size - index - 1; ++i) succ = succ!.prev
      pred = succ!.prev!.prev
    }

    pred!.next = succ
    succ!.prev = pred
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
