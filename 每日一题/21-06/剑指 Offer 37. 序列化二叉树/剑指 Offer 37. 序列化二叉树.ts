class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

var serialize = function (root: TreeNode) {
  return rserialize(root, '')
}

var deserialize = function (data: string) {
  const dataArray = data.split(',')
  return rdeserialize(dataArray)
}

const rserialize = (root: TreeNode, str: string) => {
  if (root === null) {
    str += 'None,'
  } else {
    str += root.val + '' + ','
    str = rserialize(root.left!, str)
    str = rserialize(root.right!, str)
  }
  return str
}

const rdeserialize = (dataList: string[]) => {
  if (dataList[0] === 'None') {
    dataList.shift()
    return null
  }

  const root = new TreeNode(parseInt(dataList[0]))
  dataList.shift()
  root.left = rdeserialize(dataList)
  root.right = rdeserialize(dataList)

  return root
}
