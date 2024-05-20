export const score = (dice, cat) => {
  const OP = {
    yacht: () => {
      if (dice.every(item => item === dice[0])) {
        return 50
      }
      return 0
    },

    ones: () => nums(1),
    twos: () => nums(2),
    threes: () => nums(3),
    fours: () => nums(4),
    fives: () => nums(5),
    sixes: () => nums(6),

    'full house': () => {
      const [types, lengths] = getLens()
      if (!lengths.every(len => [2, 3].includes(len))) {
        return 0
      }
      return dice.reduce((acc, cur) => acc + cur, 0)
    },

    'four of a kind': () => {
      const [types, lengths] = getLens()
      const more = Math.max(...lengths)
      const moreOf = types[lengths.indexOf(more)]
      if (more < 4) {
        return 0
      }
      return moreOf * 4

    },

    'little straight': (series = [1, 2, 3, 4, 5]) => {
      const pass = series.every(item => dice.includes(item))
      if (pass) {
        return 30
      }
      return 0
    },

    'big straight': () => {
      return OP['little straight']([2, 3, 4, 5, 6])
    },

    'choice': () => dice.reduce((acc, cur) => acc + cur, 0)
  }

  const nums = (num) => dice.filter(item => item === num).length * num

  const getLens = () => {
    const types = [...new Set(dice)]
    const lengths = types.map(item => dice.filter(el => el === item).length)
    return [types, lengths]
  }

  return OP[cat]()
};
