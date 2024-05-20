export class Element {
  constructor(value) {
    this.v = value
    this.n = null
  }

  get value() {
    return this.v
  }

  get next() {
    return this.n
  }

  set next(n) {
    this.n = n
  }
}

export class List {
  constructor(input = []) {
    this.i = null
    input.forEach(item => this.add(new Element(item)))
  }

  add(nextValue) {
    let item = this.i

    if (item === null) {
      this.i = nextValue
      return
    }

    nextValue.next = item
    this.i = nextValue
  }

  get length() {
    let item = this.i

    if (item === null) {
      return 0
    }

    let len = 1

    while (item.next !== null) {
      item = item.next
      len++
    }

    return len
  }

  get head() {
    return this.i
  }

  toArray() {
    let res = [this.i.value]
    let item = this.i

    while (item.next !== null) {
      item = item.next
      res.push(item.value)
    }
    return res
  }

  reverse() {
    return new List(this.toArray())
  }
}
