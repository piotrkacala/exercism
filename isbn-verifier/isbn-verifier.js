export const isValid = (str) => {
  const noDash = str.replaceAll('-', '')

  if (noDash.length !== 10) {
    return false
  }

  const nineDigits = noDash.slice(0, 9)
  const special = noDash.at(-1) === 'X' ? '10' : noDash.at(-1)

  if (/[^\d]/.test(nineDigits + special)) {
    return false
  }

  const sum = [
    [...nineDigits].map(Number),
    Number(special)
  ]
    .flat()
    .reverse()
    .reduce((acc, cur, ind) => acc + cur * (ind + 1), 0)

  return sum % 11 === 0
};
