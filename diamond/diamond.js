export const rows = (letter) => {
  const AZ = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()

  const boxHeight = AZ.indexOf(letter) * 2 + 1
  const center = Math.floor(boxHeight / 2)
  const diamond = [...Array(boxHeight)].map(() => [...Array(boxHeight)].map(() => ' '))

  for (let i = 0; i <= center; i++) {
    diamond[i][center - i] = AZ.at(i)
    diamond[i][center + i] = AZ.at(i)
    diamond[boxHeight - 1 - i][center - i] = AZ.at(i)
    diamond[boxHeight - 1 - i][center + i] = AZ.at(i)
  }

  return diamond.map(row => row.join(''))
};
