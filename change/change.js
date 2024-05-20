export class Change {
  calculate(coinArray, target) {
    if (target < 0) {
      throw new Error('Negative totals are not allowed.')
    } else if (target === 0) {
      return []
    }
    const limit = Math.ceil(target / coinArray[0])
    let res = []
    let best = Infinity

    function emit(availableCoinArray, used) {
      for (let i = availableCoinArray.length - 1; i >= 0; i--) {
        const stat = {
          avail: availableCoinArray.slice(0, i + 1),
          used: [...used, availableCoinArray[i]]
        }
        step(stat)
        stat.avail = stat.avail.slice(0, i)
        step(stat)
      }
    }

    function step(details) {
      const sum = details.used.reduce((a, c) => a + c)
      const len = details.used.length
      if (sum === target && len < best) {
        best = len
        res = [...details.used]
        return
      }
      if (sum > target || len >= best || len > limit || details.avail.length === 0) {
        return
      }
      emit([...details.avail], [...details.used])
      emit([...details.avail.slice(0, -1)], [...details.used])
    }

    emit([...coinArray], [])

    if (res.length === 0) {
      throw new Error(`The total ${target} cannot be represented in the given currency.`)
    }

    return res.reverse()
  }
}
