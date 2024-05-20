export const toRoman = (num) => {
  const values = [1000, 900, 500, 100, 90, 50, 10, 9, 5, 1]
  const names = ['M', 'CM', 'D', 'C', 'XC', 'L', 'X', 'IX', 'V', 'I']
  const arr = []

  for (let i = 0; i < values.length; i++) {
    const v = values[i]
    const name = names[i]
    const times = Math.floor(num / v)
    arr.push(name.repeat(times))
    num -= v * times
  }

  return arr.map(item => {
    if (item.length < 4) {
      return item
    }
    const ind = names.indexOf(item[0])
    return item[0] + names[ind - 1]
  }).join('')
};
