export const square = (sq) => {
  if (sq < 1 || sq > 64) {
    throw new Error('square must be between 1 and 64')
  }
  return BigInt(2**(sq-1))
};

export const total = (sq = 64) => {
  return [...Array(sq)].reduce((acc, cur, ind) => acc+BigInt(2**ind), 0n)
};
