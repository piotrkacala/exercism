export class CustomSet {
  constructor(arr = []) {
    this._a = arr
  }

  get values() {
    return this._a
  }
  empty() {
    return this._a.length === 0
  }

  contains(n) {
    return this._a.includes(n)
  }

  add(n) {
    if (!this._a.includes(n)) {
      this._a.push(n)
    }

    return this
  }

  subset(compare) {
    return this._a.every(item => compare.values.includes(item))
  }

  disjoint(compare) {
    return !this._a.some(item => compare.values.includes(item))
  }

  eql(compare) {
    return this._a.length === compare.values.length && this._a.every(item => compare.values.includes(item))
  }

  union(add) {
    const old = this._a
    add.values.forEach(item => {
      if (!old.includes(item)) {
        old.push(item)
      }
    })
    return new CustomSet(old)
  }

  intersection(compare) {
    const resArr = this._a.filter(item => compare.values.includes(item))
    return new CustomSet(resArr)
  }

  difference(compare) {
    const resArr = this._a.filter(item => !compare.values.includes(item))
    return new CustomSet(resArr)
  }
}
