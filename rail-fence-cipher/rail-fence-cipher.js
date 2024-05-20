export const encode = (txt, rails) => {
  const res = Array(rails).fill('')
  let x = 1
  let dir = -1
  for (let i = 0; i < txt.length; i++) {
    let newVal = x + dir
    if (newVal > rails - 1 || newVal < 0) {
      dir = dir * -1
      newVal = x + dir
    }
    x = newVal
    res[newVal] += txt[i]
  }
  return res.join('')
};

export const decode = (txt, rails) => {
  let txtArr = txt.split('')
  let res = [...Array(txt.length)]
  for (let row = 0; row < rails; row++) {
    let x = 1
    let dir = -1
    for (let i = 0; i < txt.length; i++) {
      let newVal = x + dir
      if (newVal > rails - 1 || newVal < 0) {
        dir = dir * -1
        newVal = x + dir
      }
      x = newVal
      if (newVal === row) {
        res[i] = txtArr.shift()
      }
    }
  }
  return res.join('')
};
