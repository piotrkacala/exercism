export const squareRoot = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i * i === num) {
      return i
    }
  }
};
