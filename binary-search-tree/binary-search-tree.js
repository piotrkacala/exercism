export class BinarySearchTree {
  constructor(v) {
    this.l = null
    this.r = null
    this.v = v
  }

  get data() {
    return this.v
  }

  get right() {
    return this.r
  }

  get left() {
    return this.l
  }

  insert(num) {
    const newNode = new BinarySearchTree(num)

    const loop = (val) => {
      if (num > val.v && val.r === null) {
        val.r = newNode
        return
      } else if (num > val.v) {
        loop(val.r)
        return
      }
      if (val.l === null) {
        val.l = newNode
        return
      }
      loop(val.l)
    }

    loop(this)
  }

  each(fn) {
    const step = (val) => {
      if (val.l !== null) {
        step(val.l)
      }

      fn(val.v)

      if (val.r !== null) {
        step(val.r)
      }
    }
    step(this)
  }
}
