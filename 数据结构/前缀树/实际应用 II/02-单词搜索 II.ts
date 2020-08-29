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

class Trie {
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

export function findWords(board: string[][], words: string[]): string[] {
  const ans: string[] = []
  const rowLen = board.length
  const colLen = board[0].length
  const trie = new Trie()
  for (let word of words) {
    trie.insert(word)
  }

  // 搜索方向向量
  let dx = [-1, 1, 0, 0]
  let dy = [0, 0, -1, 1]
  // DFS 搜索
  const dfs = (i: number, j: number, curStr: string) => {
    let restore = board[i][j]
    curStr += restore
    // 字典树中找到了
    if (trie.search(curStr) && ans.indexOf(curStr) === -1) {
      ans.push(curStr)
    }
    // 减枝 - 拼接字符判断是否存在于字典树中，如果前缀都不是，直接false
    if (!trie.startsWith(curStr)) {
      return
    }
    // 前进
    board[i][j] = '#'
    for (let r = 0; r < 4; r++) {
      let tmp_i = dx[r] + i
      let tmp_j = dy[r] + j
      // 边界情况处理
      if (
        tmp_i >= 0 &&
        tmp_i < rowLen &&
        tmp_j >= 0 &&
        tmp_j < colLen &&
        board[tmp_i][tmp_j] != '#'
      ) {
        dfs(tmp_i, tmp_j, curStr)
      }
    }
    // 还原(回溯)
    board[i][j] = restore
  }

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      dfs(i, j, '')
    }
  }

  return ans
}
