export const encode = (phrase, { a, b }) => {
  const AZ = 'abcdefghijklmnopqrstuvwxyz'

  areCoprimes(a, AZ.length)

  return phrase
    .replaceAll(/[\s.,]/g, '')
    .toLowerCase()
    .split('')
    .map(letter => {
      if (/\d/.test(letter)) {
        return 'd' + letter
      }
      return (a * AZ.indexOf(letter) + b) % AZ.length
    })
    .map(ind => {
      if (ind[0] === 'd') {
        return ind.slice(1)
      }
      return AZ[ind]
    })
    .join('')
    .replace(/(.{5})/g, '$1 ')
    .trim()

};

export const decode = (phrase, { a, b }) => {
  const AZ = 'abcdefghijklmnopqrstuvwxyz'
  let mmi

  areCoprimes(a, AZ.length)

  for (let i = 1; i < 27; i++) {
    if ((a * i) % AZ.length === 1) {
      mmi = i
      break
    }
  }

  return phrase
    .replaceAll(' ', '')
    .split('')
    .map(letter => {
      if (/\d/.test(letter)) {
        return 'd' + letter
      }
      return AZ.indexOf(letter)
    })
    .map(ind => {
      if (ind[0] === 'd') {
        return ind.slice(1)
      }
      return AZ.at(mmi * (ind - b) % AZ.length)
    })
    .join('')
};

const areCoprimes = (a, b) => {
  const keys = [a, b].sort((a, b) => a - b)

  for (let i = 2; i <= keys[0]; i++) {
    if ((a % i === 0) && (b % i === 0)) {
      throw new Error('a and m must be coprime.')
    }
  }
}
