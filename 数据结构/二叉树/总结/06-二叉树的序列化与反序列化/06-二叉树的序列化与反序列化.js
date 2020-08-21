/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// dfs
var serialize = function (root) {
  // 遇到null节点
  if (!root) {
    return 'Null,'
  }
  // 左子树的序列化后的字符串
  const leftSerialized = serialize(root.left)
  // 右子树的序列化后的字符串
  const rightSerialized = serialize(root.right)
  // 按 根|左|右 拼接在一起返回
  return root.val + ',' + leftSerialized + rightSerialized
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const buildTree = (list) => {
    const nodeVal = list.shift()
    if (nodeVal == 'Null') {
      return null
    }
    const node = new TreeNode(nodeVal) // 根
    node.left = buildTree(list) // 左子树
    node.right = buildTree(list) // 右子树
    return node // 返回当前构建完毕的子树
  }
  const list = data.split(',')
  return buildTree(list)
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
