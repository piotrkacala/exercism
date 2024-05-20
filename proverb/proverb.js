export const proverb = (...input) => {
  if (input.length === 0) {
    return ''
  }

  let qual = ''
  let args = input

  if (typeof input.at(-1) !== 'string') {
    qual = input.at(-1).qualifier + ' '
    args = input.slice(0, -1)
  }

  const res = []
  for (let i = 0; i < args.length; i++) {
    if (i === args.length - 1) {
      res.push(`And all for the want of a ${qual}${args[0]}.`)
      continue
    }
    res.push(`For want of a ${args[i]} the ${args[i + 1]} was lost.`)
  }
  return res.join('\n')
};
