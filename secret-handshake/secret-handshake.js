export const commands = (input) => {
  const ACTIONS = [
    'reverse',
    'jump',
    'close your eyes',
    'double blink',
    'wink'
  ]

  let str = input.toString(2)
  let action = 4
  let result = []

  while (str.length) {
    const last = str.at(-1)
    if (Number(last)) {
      result.push(ACTIONS[action])
    }
    action--
    str = str.slice(0, -1)
  }

  if (result.includes('reverse')) {
    result = result.slice(0, -1).reverse()
  }

  return result
};
