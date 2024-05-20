export const score = (x, y) => {
  const RAD = [1, 5, 10]
  const sum = (x ** 2) + (y ** 2)
  for (let i = 0; i < RAD.length; i++) {
    if (sum <= RAD[i] ** 2) {
      return RAD.at(-1 - i);
    }
  }
  return 0
};
