export const solve = (input) => {
  const uniqueLetters = [...new Set(input.match(/[A-Z]/g))]
  const [left, right] = input.split(' == ').map(item => item.split(' + '))
  const lead = [...new Set([...left, ...right].map(item => item[0]))]
  let solution = null
  let possible = []
  let lValues = {}
  uniqueLetters.forEach(ltr => lValues[ltr] = 0)
  let rValues = { ...lValues }

  left.forEach(word => {
    for (let i = 0; i < word.length; i++) {
      lValues[word[i]] += (10 ** (word.length - 1 - i))
    }
  })
  right.forEach(word => {
    for (let i = 0; i < word.length; i++) {
      rValues[word[i]] += (10 ** (word.length - 1 - i))
    }
  })

  const stats = {
    digitsUnused: [...Array(10)].map((e, i) => i),
    lettersUnused: [...uniqueLetters],
    pairs: {}
  }

  const step = (stat) => {
    const letterToAssign = stat.lettersUnused[0]

    for (let ind = 0; ind < stat.digitsUnused.length; ind++) {
      const dig = stat.digitsUnused[ind]
      if (dig === 0 && lead.includes(letterToAssign)) {
        continue
      }

      const o = {
        digitsUnused: stat.digitsUnused.toSpliced(ind, 1),
        lettersUnused: stat.lettersUnused.slice(1),
        pairs: { ...stat.pairs }
      }
      o.pairs[letterToAssign] = dig
      if (o.lettersUnused[0] === undefined) {
        possible.push(o.pairs)
        continue
      }
      step(o)
    }

  }

  step({ ...stats })

  for (let i = 0; i < possible.length; i++) {
    const pairs = possible[i]

    let rNum = 0
    for (const l in rValues) {
      rNum += pairs[l] * rValues[l]
    }

    let lNum = 0
    for (const l in lValues) {
      lNum += pairs[l] * lValues[l]
    }

    if (lNum !== rNum) {
      continue
    }
    solution = pairs
    break
  }

  return solution
};
