export const primeFactors = (num) => {
  let rest = num
  let i = 2
  const list = []
  while (rest > 1) {
    if (Number.isInteger(rest / i )) {
      rest = rest / i
      list.push(i)
      continue
    }
    i++
  }
  return list
};
