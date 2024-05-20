export const findAnagrams = (target, arr) => {
  const lowTarget = [...target.toLocaleLowerCase()]

  const res = arr.filter(el => {
    if (el.length !== target.length ||
      el.toLocaleLowerCase() === target.toLocaleLowerCase()) {
      return false
    }
    const low = [...el.toLocaleLowerCase()]
    let ok = true
    lowTarget.forEach(i => {
      const ind = low.indexOf(i)
      if (ind === -1) {
        ok = false
      }
      low.splice(ind, 1)
    })
    return ok
  })

  return res
};