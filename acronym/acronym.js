export const parse = (text) => {
  return text
    .replaceAll(/_/g, '')
    .split(/[-\s]/g)
    .filter(el => el !== '')
    .reduce((acc, cur) => acc += cur.toUpperCase()[0], '')
};
