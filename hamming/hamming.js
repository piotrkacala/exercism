//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (a, b) => {
  if (a.length !== b.length) {
    throw new Error('strands must be of equal length')
  }
  return [...a].filter((item, index) => item !== b.at(index)).length
};
