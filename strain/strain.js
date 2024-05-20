export const keep = (arr, fn) => {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      res.push(arr[i])
    }
  }
  return res
};

export const discard = (arr, fn) => keep(arr, (e) => !fn(e))
