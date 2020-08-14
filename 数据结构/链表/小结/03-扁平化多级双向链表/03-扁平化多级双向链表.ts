class Node {
  constructor(
    public val: number = 0,
    public prev: Node | null = null,
    public next: Node | null = null,
    public child: Node | null = null
  ) {}
}

export function flatten(head: Node): Node {
  let copy: Node | null = head
  while (copy) {
    const next: Node | null = copy.next
    if (copy.child) {
      const node = flatten(copy.child)
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
