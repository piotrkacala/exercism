export const isPaired = (str) => {
  const OPEN = ['[', '{', '(']
  const CLOSE = [']', '}', ')']
  const filtered = [...str.replaceAll(/[^[\]{}()]/g, '')]
  let valid = true

  const left = filtered.reduce((acc, cur) => {
    if (OPEN.includes(cur)) {
      acc.push(cur)
      return acc
    }

    const closeIndex = CLOSE.indexOf(cur)

    if (cur === CLOSE[closeIndex] && acc.at(-1) !== OPEN[closeIndex]) {
      valid = false
      return acc
    }

    if (cur === CLOSE[closeIndex]) {
      return acc.slice(0, -1)
    }
    return acc
  }, [])

  if (left.length > 0) {
    valid = false
  }

  return valid
};
