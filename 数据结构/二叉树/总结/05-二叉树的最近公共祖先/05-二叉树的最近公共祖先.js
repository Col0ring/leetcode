/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 递归
var lowestCommonAncestor = function (root, p, q) {
  let ans = null
  const dfs = (root, p, q) => {
    if (!root) {
      return false
    }
    const lson = dfs(root.left, p, q)
    const rson = dfs(root.right, p, q)
    if (
      (lson && rson) ||
      ((root.val === p.val || root.val === q.val) && (lson || rson))
    ) {
      // 自底向上赋值
      ans = root
    }
    // 证明包含了两者中的一个
    return lson || rson || root.val === p.val || root.val === q.val
  }
  dfs(root, p, q)
  return ans
}
