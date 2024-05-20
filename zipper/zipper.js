export class Zipper {
  constructor(input, top = []) {
    this.d = input
    this.top = top
  }

  static fromTree(input) {
    return new Zipper(input)
  }

  toTree() {
    let top = this.top
    let cur = this.d

    while (top.length) {
      let up = top[0]
      if (up.left === undefined) {
        up.left = cur
      } else if (up.right === undefined) {
        up.right = cur
      }
      cur = up
      top = top.slice(1)
    }

    return cur
  }

  value() {
    return this.d.value
  }

  left() {
    const newFocus = this.d.left
    if (newFocus === null) {
      return null
    }
    const top = [{ value: this.d.value, right: this.d.right }, ...this.top]

    return new Zipper(newFocus, top)
  }

  right() {
    const newFocus = this.d.right
    if (newFocus === null) {
      return null
    }
    const top = [{ value: this.d.value, left: this.d.left }, ...this.top]

    return new Zipper(newFocus, top)
  }

  up() {
    const newFocus = this.top[0]
    if (newFocus === undefined) {
      return null
    }
    const top = this.top.slice(1)
    if (newFocus.left === undefined) {
      newFocus.left = this.d
    } else if (newFocus.right === undefined) {
      newFocus.right = this.d
    }

    return new Zipper(newFocus, top)
  }

  setValue(val) {
    const newFocus = { ...this.d }
    newFocus.value = val
    const top = [...this.top]

    return new Zipper(newFocus, top)
  }

  setLeft(input) {
    const cur = { ...this.d }
    cur.left = input

    return new Zipper(cur, this.top)
  }

  setRight(input) {
    const cur = { ...this.d }
    cur.right = input

    return new Zipper(cur, this.top)
  }
}
