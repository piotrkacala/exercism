export const promisify = (fn) => {
  return function (val) {

    return new Promise((res, rej) => {
      fn(val, (a, b) => {
        if (b === undefined) {
          rej(a)
        }
        res(b)
      })
    })
  }
};

export const all = (input) => {
  return new Promise((res, rej) => {
    if (input === undefined) {
      res()
    }
    if (input.length === 0) {
      res([])
    }
    const done = [...Array(input.length)]
    input.forEach((item, index) => {
      item.then(e => {
        done[index] = e
        if (done.every(el => el !== undefined)) {
          res(done)
        }
      }).catch(er => rej(er))
    })
  })
};

export const allSettled = (input) => {
  return new Promise((res, rej) => {
    if (input === undefined) {
      res()
    }
    if (input.length === 0) {
      res([])
    }
    const done = [...Array(input.length)]
    input.forEach((item, index) => {
      item.then(e => {
        done[index] = e
      })
        .catch(er => {
          done[index] = er
        })
        .finally(() => {
          if (done.every(el => el !== undefined)) {
            res(done)
          }
        })
    })
  })
};

export const race = (input) => {
  return new Promise((res, rej) => {
    if (input === undefined) {
      res()
    }
    if (input.length === 0) {
      res([])
    }
    input.forEach(item => {
      item.then(e => res(e)).catch(er => rej(er))
    })
  })
};

export const any = (input) => {
  return new Promise((res, rej) => {
    if (input === undefined) {
      res()
    }
    if (input.length === 0) {
      res([])
    }
    const done = [...Array(input.length)]
    input.forEach((item, index) => {
      item.then(e => res(e))
        .catch(er => {
          done[index] = er
        })
        .finally(() => {
          if (done.every(el => el !== undefined)) {
            rej(done)
          }
        })
    })
  })
};
