export const chain = (input) => {
  if (input.length === 0) {
    return []
  }

  if (input.length === 1 && input[0][0] === input[0][1]) {
    return input
  }

  if (input.length === 1) {
    return null
  }

  let res = null

  for (let i = 0; i < input.length - 1; i++) {
    step([input.at(i)], input.slice(1))
  }

  function step(cur, arr) {
    if (arr.length === 0 && cur[0][0] === cur.at(-1)[1]) {
      res = cur
    }

    if (arr.length === 0) {
      return
    }

    const matchWith = cur.at(-1)[1]

    arr.forEach((item, ind) => {
      if (matchWith === item[0]) {
        step([...cur, item], arr.toSpliced(ind, 1))
      }

      if (matchWith === item[1]) {
        step([...cur, [...item].reverse()], arr.toSpliced(ind, 1))
      }
    })
  }

  return res
};
