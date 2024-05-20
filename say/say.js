export const say = (n) => {
  if (n < 0 || n > 999_999_999_999) {
    throw new Error('Number must be between 0 and 999,999,999,999.')
  }

  let str = String(n)
  let group = []

  while (str.length > 3) {
    group.push(str.slice(-3))
    str = str.slice(0, -3)
  }
  group.push(str)

  let res = ''

  for (let i = 0; i < group.length; i++) {
    const order = ['', 'thousand', 'million', 'billion'][i]
    let line = ''
    let gr = [...group[i]]

    if (gr.length === 3 && gr[0] !== '0') {
      line = getDigit(gr[0]) + ' hundred '
    }
    if (gr.length === 3) {
      gr = gr.slice(1)
    }

    if (gr.length === 2 && Number(gr[0]) > 1) {
      line = `${line}${getTens(gr[0])}${gr[1] === '0' ? '' : '-' + getDigit(gr[1])}`
      gr = []
    } else if (gr.length === 2 && gr[0] === '1') {
      line = `${line} ${getTeens(gr[1])}`
      gr = []
    } else if (gr.length === 2) {
      gr = gr.slice(1)
    }

    if (line !== '' && gr[0] === '0') {
      gr = []
    }

    if (gr[0] === '0' && group.length > 1) {
      continue
    }

    res = `${line}${gr.map(getDigit)} ${order} ` + res
  }

  return res.trim()

  function getDigit(num) {
    return ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'][Number(num)]
  }

  function getTens(num) {
    return ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'][Number(num)]
  }

  function getTeens(num) {
    return ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fiveteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'][Number(num)]
  }
};
