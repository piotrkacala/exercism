//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (word) => {
  const VALUE = new Map()
    VALUE
      .set('A', 1)
      .set('E', 1)
      .set('I', 1)
      .set('O', 1)
      .set('U', 1)
      .set('L', 1)
      .set('N', 1)
      .set('R', 1)
      .set('S', 1)
      .set('T', 1)
      .set('D', 2)
      .set('G', 2)
      .set('B', 3)
      .set('C', 3)
      .set('M', 3)
      .set('P', 3)
      .set('F', 4)
      .set('H', 4)
      .set('V', 4)
      .set('W', 4)
      .set('Y', 4)
      .set('K', 5)
      .set('J', 8)
      .set('X', 8)
      .set('Q', 10)
      .set('Z', 10)
      
      
  return [...word].reduce((acc, cur) => {
    acc += VALUE.get(cur.toUpperCase())
    return acc
  }, 0)
};
