export const saddlePoints = (input) => {
  let res = []

  input.forEach((row, rowIndex) => {
    const hi = Math.max(...row)
    const ind = row.reduce((acc, cur, i) => cur === hi ? [...acc, [i, rowIndex]] : acc, [])
    res = [...res, ...ind]
  })

  return res.filter(item => {
    const x = item[0]
    const y = item[1]
    const column = [...input].map(row => row[x])
    const min = Math.min(...column)
    const value = input[y][x]

    return min === value
  }).map(item => ({
    row: item[1] + 1,
    column: item[0] + 1
  }))
};
