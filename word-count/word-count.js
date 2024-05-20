export const countWords = (input) => {
  return input.toLocaleLowerCase().match(/\b[\w']+\b/g).reduce((acc, cur) => {
    if (acc[cur] === undefined) {
      acc[cur] = 0
    }
    acc[cur]++
    return acc
  }, {})
  return arr
};
