//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(input = []) {
    this.values = input
  }
  
  append(list2) {
    return new List([...this.values, ...list2.values])
  }

  concat(input) {
    const dat = input.values
    for (let list in dat) {
      this.values = this.append(dat[list]).values
    }
    return this
  }

  filter(func) {
    this.values = this.foldl((acc, el)=>{
      if (func(el)) {
        acc = [...acc, el]
      }
      return acc
    },[])
    return this
  }

  map(cb) {
    this.values = this.foldl((acc, el) => [...acc, cb(el)],[])
    return this
  }

  length() {
    let len = 0
    for (let key of this.values) {
      len++
    }
    return len
  }

  foldl(cb, acc) {
    if (this.length() === 0) {
      return acc
    }
    const [first, ...rest] = this.values
    this.values = rest
    const result = cb(acc, first)
    return this.foldl(cb, result)
  }

  foldr(cb, acc) {
    this.reverse()
    return this.foldl(cb, acc)
  }

  reverse() {
    this.values = this.foldl((acc, el)=>[el, ...acc],[])
    return this
  }
}
