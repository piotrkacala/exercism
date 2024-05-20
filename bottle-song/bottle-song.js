export const recite = (initialBottlesCount, takeDownCount) => {
  const NUM = ['no', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']

  const getVerse = (v) => {
    const numberOf = NUM[v]
    return [
      `${numberOf} green bottle${v < 2 ? '' : 's'} hanging on the wall,`,
      `${numberOf} green bottle${v < 2 ? '' : 's'} hanging on the wall,`,
      `And if one green bottle should accidentally fall,`,
      `There'll be ${NUM[v - 1].toLowerCase()} green bottle${v === 2 ? '' : 's'} hanging on the wall.`,
      ''
    ]
  }

  let res = []
  for (let i = initialBottlesCount; i > initialBottlesCount - takeDownCount; i--) {
    res.push(getVerse(i))
  }
  return res.flat().slice(0, -1)
};
