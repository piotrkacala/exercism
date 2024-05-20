export function count(input) {
  if (input.length == 0) {
    return 0
  }
  const width = input[0].length
  const height = input.length
  const mat = input.map(e => e.split(''))
  let found = 0

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let item = input[y][x]

      if (item !== '+') {
        continue
      }

      look(1, 0, [[x, y]], [x, y])
    }
  }
  return found

  function look(x, y, corners, last) {
    const corX = last[0] + x
    const corY = last[1] + y
    const nextPoint = [corX, corY]
    const nextValue = mat[corY]?.[corX]

    if ([' ', undefined].includes(nextValue)) {
      return
    }

    const neededByDirection = x !== 0 ? '-' : '|'

    if (nextValue === neededByDirection) {
      return look(x, y, corners, nextPoint)
    }

    if (nextValue !== '+') {
      return
    }

    look(x, y, corners, nextPoint)

    let withAddedCorner = [...corners, nextPoint]
    const len = withAddedCorner.length

    if (len === 4) {
      let firstCorner = withAddedCorner[0]
      let lastCorner = withAddedCorner[3]

      if (firstCorner[0] === lastCorner[0]) {
        for (let iy = lastCorner[1]; iy >= firstCorner[1]; iy--) {

          const element = mat[iy][lastCorner[0]]

          if (!['+', '|'].includes(element)) {
            break
          }

          if (iy === firstCorner[1]) {
            found++
          }
        }
      }
    } else if (len === 3) {
      look(-1, 0, withAddedCorner, nextPoint)
    } else if (len === 2) {
      look(0, 1, withAddedCorner, nextPoint)
    }
  }
}
