class Node {
  val: number = 0
  neighbors: Array<Node | null> = []
  constructor(val?: number, neighbors?: Array<Node | null>) {
    this.val = !val ? 0 : val
    this.neighbors = !neighbors ? [] : neighbors
  }
}

// 命名冲突，必须将文件转化为模块
// 递归
// export function cloneGraph(node: Node) {
//   const clone = (node: Node | null, map: Map<number, Node>) => {
//     if (!node) return null
//     let newNode = map.get(node.val)
//     if (newNode) {
//       return newNode
//     }
//     newNode = new Node(node.val)
//     map.set(node.val, newNode)
//     node.neighbors.forEach((neighbor) => {
//       newNode!.neighbors.push(clone(neighbor, map))
//     })
//     return newNode
//   }
//   return clone(node, new Map<number, Node>())
// }

// dfs
export function cloneGraph(node: Node) {
  if (!node) return null
  const map = new Map<number, Node>()
  const stack = [node]
  const newNode = new Node(node.val)
  map.set(node.val, newNode)
  while (stack.length) {
    // 在第一次的时候。currentNode 就是传入的 node，currentNewNode 就是 上面的 newNode
    let currentNode = stack.pop()!
    let currentNewNode = map.get(currentNode.val)!
    currentNode.neighbors.forEach((neighbor) => {
      let newNB = map.get(neighbor!.val)
      if (!newNB) {
        stack.push(neighbor!)
        newNB = new Node(neighbor!.val)
        map.set(neighbor!.val, newNB)
      }
      currentNewNode.neighbors.push(newNB)
    })
  }
  return newNode
}
