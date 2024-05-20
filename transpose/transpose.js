export const transpose = (input) => {
  const noColumns = [...input].reduce((acc, cur) => Math.max(cur.length, acc), 0)
  const res = []

  for (let i = 0; i < noColumns; i++) {
    let gap = 0
    const row = input.reduce((acc, cur) => {
      let pad = ''
      if (cur[i] === undefined) {
        gap++
      } else if (gap > 0) {
        pad = [...Array(gap)].map(() => ' ').join('')
        gap = 0
      }
      return acc + pad + (cur[i] ?? '')
    }, '')
    res.push(row)
  }

  return res
};
