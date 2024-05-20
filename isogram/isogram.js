export const isIsogram = (str) => {
  return [...str.toLowerCase().replaceAll(/[-\s]/g, '')]
    .every((val, ind, arr) => arr.indexOf(val, ind + 1) === -1)
};
