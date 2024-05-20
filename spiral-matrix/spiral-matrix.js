export const spiralMatrix = (size) => {
  if (size === 0) {
    return []
  }

  const emptyRow = [...Array(size)].map(() => null)
  const mat = [...Array(size)].map(() => [...emptyRow])
  let x = 0
  let y = 0
  mat[0][0] = 1
  let num = 2
  const target = size ** 2

  step(1, 0, 0, 0)

  function step(dx, dy, lx, ly) {
    if (num > target) {
      return
    }

    const nx = lx + dx
    const ny = ly + dy
    const newPoint = mat[ny]?.[nx]

    if (newPoint === null) {
      mat[ny][nx] = num
      num++
      return step(dx, dy, nx, ny)
    } else if (newPoint === undefined || typeof newPoint == 'number') {
      let newdx
      let newdy
      if (dx > 0) {
        newdx = 0
        newdy = 1
      } else if (dy > 0) {
        newdx = -1
        newdy = 0
      } else if (dx < 0) {
        newdx = 0
        newdy = -1
      } else if (dy < 0) {
        newdx = 1
        newdy = 0
      }
      step(newdx, newdy, lx, ly)
    }
  }

  return mat
};
