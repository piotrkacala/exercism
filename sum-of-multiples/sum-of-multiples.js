export const sum = (items, lvl) => {
  const points = items.map(item => {
    let max = Math.floor(lvl / item)
    if (max * item === lvl) {
      max--
    }
    if (max === Infinity) {
      return []
    }

    return [...Array(max)].map((e, i) => (i + 1) * item)
  }).flat()

  return Array.from(new Set(points)).reduce((acc, cur) => acc + cur, 0)
};
