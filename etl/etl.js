export const transform = (old) => {
  const res = {}
  for (let i in old) {
    old[i].forEach(letter => res[letter.toLowerCase()] = Number(i))
  }
  return res
};
