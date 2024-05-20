export class InputCell {
  constructor(value) {
    this.value = value
    this.subscribe = []
  }

  setValue(value) {
    this.value = value
    this.subscribe.forEach(fn => fn(this))
  }
}

export class ComputeCell {
  constructor(inputCells, fn) {
    this.fn = fn
    this.input = inputCells
    this.subscribe = []
    this.callbackCells = []
    this.oldValue = fn(inputCells)

    inputCells.forEach(c => c.subscribe.push((cell) => {
      this.subscribe.forEach(fn => fn(this))
      let changedValue = false
      this.callbackCells.forEach(cbCell => {
        if (this.oldValue !== this.value || changedValue) {
          this.oldValue = this.value
          changedValue = true
          cbCell.fn(this)
        }
      })
    }))
  }

  get value() {
    return this.fn(this.input)
  }

  addCallback(cb) {
    this.callbackCells.push(cb)
  }

  removeCallback(cb) {
    this.callbackCells.forEach((item, ind) => {
      if (item === cb) {
        this.callbackCells.splice(ind, 1)
      }
    })
  }
}

export class CallbackCell {
  constructor(fn) {
    this.values = []
    this.fn = (e) => {
      this.values.push(fn(e))
    }
  }
}
