export const recite = (s, e = s) => {
  const DAY = [
    [],
    ['first', 'a Partridge in a Pear Tree.'],
    ['second', 'two Turtle Doves, and '],
    ['third', 'three French Hens, '],
    ['fourth', 'four Calling Birds, '],
    ['fifth', 'five Gold Rings, '],
    ['sixth', 'six Geese-a-Laying, '],
    ['seventh', 'seven Swans-a-Swimming, '],
    ['eighth', 'eight Maids-a-Milking, '],
    ['ninth', 'nine Ladies Dancing, '],
    ['tenth', 'ten Lords-a-Leaping, '],
    ['eleventh', 'eleven Pipers Piping, '],
    ['twelfth', 'twelve Drummers Drumming, ']
  ]
  const res = []
  for (let i = s; i <= e; i++) {
    const txt = DAY.slice(1, i + 1).reverse().map(e => e[1]).join('')
    res.push(`On the ${DAY[i][0]} day of Christmas my true love gave to me: ${txt}\n`)
  }
  return res.join('\n')

};
