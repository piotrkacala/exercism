export const largestProduct = (str, span) => {
  if (/[^0-9]/g.test(str)) {
    throw new Error('Digits input must only contain digits')
  }

  if (span > str.length) {
    throw new Error('Span must be smaller than string length')
  }

  if (span < 0) {
    throw new Error('Span must be greater than zero')
  }

  let top = 0
  const arr = [...str]
  const limit = arr.length - span

  for (let i = 0; i <= limit; i++) {
    const fragment = arr.slice(i, i + span)
    const sum = fragment.reduce((acc, cur) => {
      acc *= Number(cur)
      return acc
    }, 1)

    if (sum > top) {
      top = sum
    }
  }
  return top
};
