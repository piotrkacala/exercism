export const bestHands = (hands) => {
  const letToNum = (letter) => [0, 1, '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'].indexOf(letter.slice(0, -1))
  const formatResult = (toCompare) => compareSorted(toCompare).map((item, ind) => item.length > 0 ? hands[ind] : null).filter(item => item !== null)
  const compareSorted = (h) => {
    const hiCard = Math.max(...h.map(a => a.slice(0, 1)))
    let win = h.map(e => e[0] === hiCard ? e : [])
    if (win.every(item => item.length < 2)) {
      return win
    }
    if (win.filter(item => item.length > 0).length > 1) {
      win = compareSorted(win.map(e => e.slice(1)))
    }
    return win
  }
  const getStraight = (arr) => {
    let uniqStraight = [...new Set(arr.map((e, i) => e + i))]
    if (uniqStraight.length === 1) {
      return uniqStraight
    }
    //try ace as 1
    uniqStraight = [...new Set(arr.map(e => e === 14 ? 1 : e).sort((a, b) => b - a).map((e, i) => e + i))]
    if (uniqStraight.length === 1) {
      return uniqStraight
    }
    return []
  }
  const getFlush = (arr) => {
    const signTypes = new Set(arr.map(e => e.at(-1))).size
    return signTypes === 1 ? arr : []
  }
  const getFull = arr => {
    const processed = [...new Set(arr)].map(val => arr.filter(arrItem => arrItem === val))
    if (processed.length === 2 && processed.every(item => item.length > 1)) {
      return processed.sort((a, b) => b.length - a.length).flat()
    }
    return []
  }
  const getNumber = (arr, num) => {
    const targetOnly = [...new Set(arr)]
      .map(val => arr.filter(arrItem => arrItem === val))
      .filter(ar => ar.length === num)
      .flat()
    if (targetOnly.length === 0) {
      return []
    }
    const kicker = arr.filter(item => targetOnly.indexOf(item) === -1)
    return [...targetOnly, ...kicker]
  }
  const getFour = (arr) => getNumber(arr, 4)
  const getThree = (arr) => getNumber(arr, 3)
  const getTwo = (arr) => getNumber(arr, 2)

  const data = hands.map(hand => hand.split(' ').map(letToNum).sort((a, b) => b - a))
  const uniq = data.map(item => new Set(item).size)
  const isFlush = hands.map(hand => hand.split(' ')).map(getFlush)
  const isStraight = data.map(getStraight)
  const isStraightFlush = data
    .map((hand, index) => isStraight[index].length > 0 && isFlush[index].length > 0 ? hand : [])
  const isFour = data.map(getFour)
  const isFull = data.map(getFull)
  const isThree = data.map(getThree)
  const isTwo = data.map(getTwo)
  const isPairs = isTwo.map((item, ind) => uniq[ind] === 3 ? item : [])

  if (isStraightFlush.some(item => item.length > 0)) {
    return formatResult(isStraightFlush)
  }

  if (isFour.some(item => item.length > 0)) {
    return formatResult(isFour)
  }

  if (isFull.some(item => item.length > 0)) {
    return formatResult(isFull)
  }

  if (isFlush.some(item => item.length > 0)) {
    const flushData = isFlush.map((el, ind) => el.length > 0 ? data[ind] : [])
    return formatResult(flushData)
  }

  if (isStraight.some(item => item.length > 0)) {
    return formatResult(isStraight)
  }

  if (isThree.some(item => item.length > 0)) {
    return formatResult(isThree)
  }

  if (isPairs.some(item => item.length > 0)) {
    return formatResult(isPairs)
  }

  if (isTwo.some(item => item.length > 0)) {
    return formatResult(isTwo)
  }
  return formatResult(data)
};
