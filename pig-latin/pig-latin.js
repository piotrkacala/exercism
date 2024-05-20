export const translate = (str) => {
  getWord = (input) => {
    if (input.length === 2 && input.at(2) === 'y') {
      return input[1] + input[0] + 'ay'
    }

    if (/(^([aeiouw]|xr|yt))\w+/gi.test(input)) {
      return input + 'ay'
    }

    let startInd = 1

    if (/^(ch|st|qu|th|rh)\w+/gi.test(input)) {
      startInd = 2
    }

    if (/^(sch|thr)\w+/gi.test(input)) {
      startInd = 3
    }

    if (input.slice(startInd).startsWith('qu')) {
      startInd += 2
    }

    return input.slice(startInd) + input.slice(0, startInd) + 'ay'
  }

  return str.split(' ').map(getWord).join(' ')
};
