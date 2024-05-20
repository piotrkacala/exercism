export class TwoBucket {
  constructor(buckOne, buckTwo, goal, starterBuck) {
    this.oneVol = buckOne
    this.twoVol = buckTwo
    this.goal = goal
    this.starter = starterBuck
    this.one = 0
    this.two = 0
    this.result = this.res()
  }

  solve() {
    return this.result
  }

  res() {
    const oneMax = this.oneVol
    const twoMax = this.twoVol
    const initial = [0, 0]
    const startingBucket = this.starter === 'one' ? 0 : 1
    const otherBucket = this.starter === 'two' ? 0 : 1
    const otherBucketMax = this.starter === 'two' ? oneMax : twoMax

    if (this.starter === 'one') {
      initial[0] = oneMax
    } else {
      initial[1] = twoMax
    }

    if (initial.includes(this.goal)) {
      return {
        moves: 1,
        goalBucket: initial[0] === this.goal ? 'one' : 'two',
        otherBucket: initial[0] === this.goal ? initial[1] : initial[0]
      }
    }

    const empty = (pair, first) => {
      if (first && pair[0] > 0) {
        return [0, pair[1]]
      }
      if (!first && pair[1] > 0) {
        return [pair[0], 0]
      }
    }

    const fill = (pair, first) => {
      if (first && pair[0] < oneMax) {
        return [oneMax, pair[1]]
      }
      if (!first && pair[1] < twoMax) {
        return [pair[0], twoMax]
      }
    }

    const move = (pair, first) => {
      const from = first ? 0 : 1
      const to = first ? 1 : 0
      const volMax = first ? twoMax : oneMax
      const fluid = pair[from]
      const volAvailable = volMax - pair[to]

      if (fluid === 0 || volAvailable === 0) {
        return
      }

      if (volAvailable >= fluid) {
        pair[from] = 0
        pair[to] += fluid
      } else {
        pair[from] -= volAvailable
        pair[to] += volAvailable
      }
      return [...pair]
    }

    let data = [initial]

    for (let i = 2; i < 30; i++) {
      let newData = []
      let found = null

      data.some(pair => {
        newData.push(empty([...pair], true))
        newData.push(empty([...pair], false))
        newData.push(fill([...pair], true))
        newData.push(fill([...pair], false))
        newData.push(move([...pair], true))
        newData.push(move([...pair], false))

        const filtered = newData.filter(item => item !== undefined &&
          !(item[startingBucket] === 0 && item[otherBucket] === otherBucketMax) &&
          item[0] + item[1] !== 0)

        const hit = filtered.some(item => {
          if (!item.includes(this.goal)) {
            return
          }
          found = {
            moves: i,
            goalBucket: item[0] === this.goal ? 'one' : 'two',
            otherBucket: item[0] === this.goal ? item[1] : item[0]
          }
          return true
        })

        if (!hit) {
          data = [...new Set(filtered.map(item => item.join()))].map(item => item.split(',').map(Number))
        } else {
          return true
        }
      })

      if (found) {
        return found
      }
    }

    throw new Error('Not possible')
  }
}
