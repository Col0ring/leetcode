class TrieNode {
  //R 26个字母
  next: TrieNode[]
  R: number
  isEnd: boolean
  constructor(R = 26) {
    this.next = new Array(R)
    this.R = R
    this.isEnd = false //标记是否截止
  }
}

export class Trie {
  root: TrieNode
  constructor() {
    this.root = new TrieNode()
  }
  insert(word: string): void {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      if (!node.next[word.charCodeAt(i) - 'a'.charCodeAt(0)]) {
        node.next[word.charCodeAt(i) - 'a'.charCodeAt(0)] = new TrieNode()
      }
      node = node.next[word.charCodeAt(i) - 'a'.charCodeAt(0)]
    }
    // 新插入的节点一定是 end
    node.isEnd = true
  }
  search(word: string): boolean {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      node = node.next[word.charCodeAt(i) - 'a'.charCodeAt(0)]
      if (!node) {
        return false
      }
    }
    // 必须要判断这个位置是否有单词
    return node.isEnd
  }

  startsWith(prefix: string): boolean {
    let node = this.root
    for (let i = 0; i < prefix.length; i++) {
      node = node.next[prefix.charCodeAt(i) - 'a'.charCodeAt(0)]
      if (!node) {
        return false
      }
    }
    return true
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
