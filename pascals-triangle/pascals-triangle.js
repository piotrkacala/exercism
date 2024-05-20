//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (numberOfRows) => {
  const pas = []
  for (let i = 1; i <= numberOfRows; i++) {
    if (i === 1) {
      pas.push([1])
      continue
    }
    const row = []
    for (let j=i-1; j>=0; j--) {
      const prevRowNo = i-2
      const prevRow = pas[prevRowNo]
      const prevLeft = prevRow[j-1] ?? 0
      const prevRight = prevRow[j] ?? 0
      row.push(prevLeft + prevRight)
    }
    pas.push(row)
  }
  return pas
};
