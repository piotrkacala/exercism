export const valid = (inputStr) => {
  const str = inputStr.replaceAll(' ', '')
  if (str.length < 2 || /[a-z]/i.test(str)) {
    return false
  }

  const sum = [...str]
    .reverse()
    .map((item, ind) => {
      if (ind % 2 === 0) {
        return Number(item)
      }
      const multi = Number(item)*2
      return multi > 9 ? multi - 9 : multi
    })
    .reduce((acc, cur) => acc + cur, 0)
  return sum % 10 === 0
};
