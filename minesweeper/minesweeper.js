export const annotate = (input) => input.map((row, indRow) => {
  return row.split('').map((el, indCol) => {
    if (el === '*') {
      return el
    }
    let mines = 0
    for (let r = -1; r <= 1; r++) {
      for (let c = -1; c <= 1; c++) {
        const neighbour = input?.[indRow + r]?.[indCol + c]
        if (neighbour === '*') {
          mines++
        }
      }
    }
    return mines === 0 ? ' ' : mines
  }).join('')
})
