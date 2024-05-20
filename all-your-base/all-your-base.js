export const convert = (digits, from, to) => {
  if (from < 2) {
    throw new Error('Wrong input base')
  }
  if (to < 2) {
    throw new Error('Wrong output base')
  }
  if (
    digits.length === 0 ||
    digits.length > 1 && digits[0] === 0 ||
    digits.some(e => e < 0 || e > (from - 1))
  ) {
    throw new Error('Input has wrong format')
  }

  let inDecimal = digits.reverse().reduce((acc, cur, ind) => cur * from ** ind + acc, 0)
  let res = []

  while (inDecimal > 0) {
    if (inDecimal < to) {
      res.unshift(inDecimal)
      break
    }
    const digit = inDecimal % to
    inDecimal = Math.floor(inDecimal / to)
    res.unshift(digit)
  }

  if (res.length === 0) {
    return [0]
  }

  return res
};
