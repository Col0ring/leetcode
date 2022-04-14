interface Tree {
  name: string
  require?: Tree[]
}

export function resolve(tree: Tree): string[] {
  const ans: string[] = []
  const dfs = (tree: Tree) => {
    if (tree.require) {
      tree.require.forEach((tree) => dfs(tree))
    }
    if (!ans.includes(tree.name)) ans.push(tree.name)
  }
  dfs(tree)
  return ans
}

console.log(
  resolve({
    name: 'page.js',
    require: [
      {
        name: 'A.js',
        require: [
          {
            name: 'B.js',
            require: [
              {
                name: 'C.js'
              }
            ]
          }
        ]
      },
      {
        name: 'D.js',
        require: [
          {
            name: 'C.js'
          },
          {
            name: 'E.js'
          }
        ]
      }
    ]
  })
)
