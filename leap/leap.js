export const isLeap = (year) => {
  if (year % 4) {
    return false
  }
  if (year % 100 === 0 && year % 400 !== 0) {
    return false
  }
  return true
};
