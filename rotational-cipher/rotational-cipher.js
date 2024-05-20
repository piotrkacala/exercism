export const rotate = (txt, num) => {
  const az = 'abcdefghijklmnopqrstuvwxyz'

  return [...txt].map(l => {
    if (/[^a-z]/i.test(l)) {
      return l
    }

    let azIndex = az.indexOf(l)
    let upper = false

    if (azIndex === -1) {
      upper = true
      azIndex = az.indexOf(l.toLowerCase())
    }

    const newIndex = (azIndex + num) % az.length
    const newLetter = az[newIndex]

    if (upper) {
      return newLetter.toUpperCase()
    }

    return newLetter
  }).join('')
};
