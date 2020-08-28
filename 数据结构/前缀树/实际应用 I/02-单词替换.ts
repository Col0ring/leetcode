class TrieNode {
  next: TrieNode[]
  val: string = ''
  isEnd: boolean
  constructor() {
    this.next = new Array(26)
    this.isEnd = false
  }
}

class Trie {
  root: TrieNode
  constructor() {
    this.root = new TrieNode()
  }
  insert(word: string): void {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      const index = word.charCodeAt(i) - 'a'.charCodeAt(0)
      if (!node.next[index]) {
        node.next[index] = new TrieNode()
      }
      node = node.next[index]
    }
    // 新插入的节点一定是 end
    node.isEnd = true
    node.val = word
  }
  replace(word: string): string {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      node = node.next[word.charCodeAt(i) - 'a'.charCodeAt(0)]
      if (!node) {
        return word
      }
      if (node.isEnd) {
        return node.val
      }
    }
    return word
  }
}

export function replaceWords(dictionary: string[], sentence: string): string {
  const node = new Trie()
  for (let word of dictionary) {
    node.insert(word)
  }
  const arr = sentence.split(' ')
  for (let i = 0; i < arr.length; i++) {
    arr[i] = node.replace(arr[i])
  }
  return arr.join(' ')
}
