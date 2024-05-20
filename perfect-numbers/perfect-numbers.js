export const classify = (n) => {
  if (n<1) {
    throw new Error('Classification is only possible for natural numbers.')
  }
  
  const sum = [...Array(n)].reduce((acc, cur, ind) => n % ind === 0 ? acc + ind : acc, 0)

  if (sum === n) {
    return 'perfect'
  }
  
  if (n < sum) {
    return 'abundant'
  }
  
  if (n > sum) {
    return 'deficient'
  }
};
