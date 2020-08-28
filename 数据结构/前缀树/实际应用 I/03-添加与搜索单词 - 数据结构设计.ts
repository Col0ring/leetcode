// Initialize your data structure here.
// */
type TrieNodeMap = Map<string, TrieNodeMap>
class WordDictionary {
  root: TrieNodeMap
  constructor() {
    this.root = new Map()
  }

  addWord(word: string): void {
    let curNode = this.root
    for (let i = 0; i < word.length; i++) {
      if (!curNode.has(word.charAt(i))) {
        curNode.set(word.charAt(i), new Map())
      }
      curNode = curNode.get(word.charAt(i))!
    }
    curNode.set('end', new Map())
  }

  dfs(root: TrieNodeMap, word: string) {
    let curNode = root
    for (let i = 0; i < word.length; i++) {
      if (word.charAt(i) === '.') {
        for (let [k, v] of curNode) {
          if (k === 'end') continue
          let found = this.dfs(v, word.slice(i + 1))
          if (found) return true
        }
        return false
      }
      if (!curNode.has(word.charAt(i))) return false
      curNode = curNode.get(word.charAt(i))!
    }
    return !!curNode.get('end')
  }
  search(word: string): boolean {
    if (!word.length) return false
    return this.dfs(this.root, word)
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
