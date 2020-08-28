class TrieNode {
  next: TrieNode[]
  val = 0
  constructor() {
    this.next = new Array(26)
  }
}
// 使用前缀树
export class MapSum {
  root: TrieNode = new TrieNode()

  insert(key: string, val: number): void {
    let node = this.root
    for (let i = 0; i < key.length; i++) {
      const index = key.charCodeAt(i) - 'a'.charCodeAt(0)
      if (!node.next[index]) {
        node.next[index] = new TrieNode()
      }
      node = node.next[index]
    }
    node.val = val
  }
  private _dfs(node: TrieNode): number {
    if (!node) return 0

    return node.next.reduce((res: number, next: TrieNode): number => {
      return res + this._dfs(next)
    }, node.val)
  }

  sum(prefix: string): number {
    let node = this.root
    for (let i = 0; i < prefix.length; i++) {
      const index = prefix.charCodeAt(i) - 'a'.charCodeAt(0)
      if (node) {
        node = node.next[index]
      } else {
        return 0
      }
    }
    return this._dfs(node)
  }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
