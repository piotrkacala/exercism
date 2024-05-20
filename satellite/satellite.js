export const treeFromTraversals = (preorder, inorder) => {
  if (preorder.length !== inorder.length) {
    throw new Error('traversals must have the same length')
  }
  if (preorder.length === 0) {
    return {}
  }
  if (preorder.length !== [...new Set(preorder)].length ||
    inorder.length !== [...new Set(inorder)].length) {
    throw new Error('traversals must contain unique items')
  }
  if (preorder.length !== [...new Set([...preorder, ...inorder])].length) {
    throw new Error('traversals must have the same elements')
  }

  function step(pre, ino) {
    if (pre.length === 1) {
      return { value: pre[0], left: {}, right: {} }
    }
    const root = pre[0]
    const ind = ino.indexOf(root) + 1
    const left = step(
      pre.slice(0, ind).filter(e => e !== root),
      ino.slice(0, ind).filter(e => e !== root)
    )
    const right = step(
      pre.slice(ind),
      ino.slice(ind)
    )

    return {
      value: root,
      left,
      right
    }
  }

  return step(preorder, inorder)
};
