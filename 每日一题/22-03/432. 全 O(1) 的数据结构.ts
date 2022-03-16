class ListNode {
  count: number
  keys: Set<string>
  prev?: ListNode
  next?: ListNode

  constructor(key?: string, count?: number) {
    this.count = count || 0
    this.keys = new Set()
    this.keys.add(key || '')
  }

  // insert node after this node
  insert(node: ListNode): ListNode {
    node.prev = this
    node.next = this.next
    this.next = node
    if (node.next) {
      node.next.prev = node
    }
    return node
  }

  // remove this ListNode
  remove(): ListNode {
    if (this.prev) {
      this.prev.next = this.next
    }
    if (this.next) {
      this.next.prev = this.prev
    }
    return this
  }
}

export class AllOne {
  root: ListNode
  nodes: Map<string, ListNode>

  constructor() {
    this.root = new ListNode()
    this.root.prev = this.root
    this.root.next = this.root
    this.nodes = new Map()
  }

  inc(key: string): void {
    if (this.nodes.has(key)) {
      const cur = this.nodes.get(key)!
      const next = cur.next!
      if (next === this.root || next.count > cur.count + 1) {
        this.nodes.set(key, cur.insert(new ListNode(key, cur.count + 1)))
      } else {
        next.keys.add(key)
        this.nodes.set(key, next)
      }
      cur.keys.delete(key)
      if (cur.keys.size === 0) {
        cur.remove()
      }
    } else {
      if (this.root.next === this.root || this.root.next!.count > 1) {
        this.nodes.set(key, this.root.insert(new ListNode(key, 1)))
      } else {
        this.root.next!.keys.add(key)
        this.nodes.set(key, this.root.next!)
      }
    }
  }

  dec(key: string): void {
    const cur = this.nodes.get(key)!
    if (cur.count === 1) {
      this.nodes.delete(key)
    } else {
      const pre = cur.prev!
      if (pre === this.root || pre.count < cur.count - 1) {
        this.nodes.set(key, cur.prev!.insert(new ListNode(key, cur.count - 1)))
      } else {
        pre.keys.add(key)
        this.nodes.set(key, pre)
      }
    }
    cur.keys.delete(key)
    if (cur.keys.size === 0) {
      cur.remove()
    }
  }

  getMaxKey(): string {
    if (!this.root.prev) {
      return ''
    }
    let maxKey = ''
    for (const key of this.root.prev.keys) {
      maxKey = key
      break
    }
    return maxKey
  }

  getMinKey(): string {
    if (!this.root.next) {
      return ''
    }
    let minKey = ''
    for (const key of this.root.next.keys) {
      minKey = key
      break
    }
    return minKey
  }
}
