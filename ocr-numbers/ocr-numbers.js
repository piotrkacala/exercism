export const convert = (input) => {
  const rows = input.split('\n')
  const width = rows[0].length
  const height = rows.length
  const numWidth = 3
  const numHeight = 4
  const numbers = (width / numWidth) * (height / numHeight)
  const template = [
    ' _ '.split(''),
    '|_|'.split(''),
    '|_|'.split(''),
    '   '.split('')
  ]
  const isNumber = [
    [
      true, true, true,
      true, false, true,
      true, true, true,
    ],
    [
      true, false, true,
      false, false, true,
      false, false, true,
    ],
    [
      true, true, true,
      false, true, true,
      true, true, false,
    ],
    [
      true, true, true,
      false, true, true,
      false, true, true,
    ],
    [
      true, false, true,
      true, true, true,
      false, false, true,
    ],
    [
      true, true, true,
      true, true, false,
      false, true, true,
    ],
    [
      true, true, true,
      true, true, false,
      true, true, true,
    ],
    [
      true, true, true,
      false, false, true,
      false, false, true,
    ],
    [
      true, true, true,
      true, true, true,
      true, true, true,
    ],
    [
      true, true, true,
      true, true, true,
      false, true, true,
    ]
  ]

  const results = [...Array(numbers)].map((val, ind) => {
    let found = '?'
    const offset = (ind * numWidth) % width
    const offsetHeight = Math.floor(ind * numWidth / width)

    const bools = [...Array(numHeight * numWidth)].map((e, i) => {
      const x = offset + (i % numWidth)
      const y = (offsetHeight * numHeight) + Math.floor(i / numWidth)
      const isLikeTemplate = rows[y][x] === template[y % numHeight][x % numWidth]
      return isLikeTemplate
    })

    for (let isN = 0; isN < 10; isN++) {
      const compareTo = isNumber[isN].every((val, ind) => val === bools[ind])
      if (compareTo) {
        found = isN
        break
      }
    }

    return found
  })

  if (height / numHeight <= 1) {
    return results.join('')
  }

  const rowGroupLength = height / numHeight
  const parts = []
  for (let i = 0; i < results.length / rowGroupLength; i++) {
    parts.push(...results.slice(i * rowGroupLength, i * rowGroupLength + rowGroupLength), ',')
  }

  return parts.slice(0, -1).join('')
};
