export const answer = (q) => {
  const ops = new Map()
  ops
    .set('plus', (left, right) => left + right)
    .set('minus', (left, right) => left - right)
    .set('multiplied', (left, right) => left * right)
    .set('divided', (left, right) => left / right)

  const trimmed = q.slice(8, -1)

  if (trimmed.length === 0) {
    throw new Error('Syntax error')
  }

  const words = trimmed
    .replaceAll('multiplied by', 'multiplied')
    .replaceAll('divided by', 'divided')
    .split(' ')

  let numbers = words.map(word => isNaN(Number(word)) ? word : Number(word))

  if (!numbers.every(item => typeof item === 'number' || ops.has(item))) {
    throw new Error('Unknown operation')
  }

  while (numbers.length > 1) {
    const left = numbers[0]
    const op = numbers[1]
    const right = numbers[2]
    if (typeof left !== 'number' || !ops.has(op) || typeof right !== 'number') {
      throw new Error('Syntax error')

    }
    const res = ops.get(op)(left, right)
    numbers = [res, ...numbers.slice(3)]
  }
  return numbers[0]
};
