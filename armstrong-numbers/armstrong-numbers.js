export const isArmstrongNumber = (num) => {
  const arr = String(num).split('')
  const power = arr.length
  const sum = arr.reduce((a, c) => (Number(c) ** power) + a, 0)
  return sum === num
};
