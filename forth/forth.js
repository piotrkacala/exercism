export class Forth {
  constructor() {
    this._stack = []
    this.ops = {
      ['+']: this.plusOp,
      ['-']: this.minusOp,
      ['*']: this.multiplyOp,
      ['/']: this.divideOp,
      ['dup']: this.dupOp,
      ['drop']: this.dropOp,
      ['swap']: this.swapOp,
      ['over']: this.overOp
    }
  }

  evaluate(inputRaw, ops = this.ops) {
    const input = inputRaw.toLowerCase()
    const isCommand = /^:.*;$/.test(input)

    if (isCommand) {
      const command = input.slice(2, -2).split(' ')
      const newCommandName = command[0]
      const newCommandOps = command.slice(1).join(' ')

      if (/^[-]?\d+$/.test(newCommandName)) {
        throw new Error('Invalid definition')
      }

      this.ops[newCommandName] = (() => {
        const ops = { ...this.ops }
        return () => {
          this.evaluate(newCommandOps, ops)
        }
      })()

      return
    }

    const comms = input.split(' ')
    for (let i = 0; i < comms.length; i++) {
      const item = comms[i]
      const isNum = /^[-]?\d+$/.test(comms[i])
      if (isNum) {
        this._stack.push(Number(item))
        continue
      }
      if (this.ops[item] === undefined) {
        throw new Error('Unknown command')
      }
      ops[item]()
      continue
    }
  }

  get stack() {
    return this._stack
  }

  setOp = (c, end = -2) => {
    this._stack = [...this._stack.slice(0, end), Math.floor(c)]
  }

  getAB = () => {
    const a = this._stack.at(-2)
    const b = this._stack.at(-1)
    if ([a, b].includes(undefined)) {
      throw new Error('Stack empty')
    }
    return [a, b]
  }

  getB = () => {
    const b = this._stack.at(-1)
    if (b === undefined) {
      throw new Error('Stack empty')
    }
    return b
  }

  arithmeticOp = (fn) => {
    this.setOp(this.getAB().reduce(fn))
  }

  plusOp = () => {
    this.arithmeticOp((acc, cur) => acc + cur)
  }

  minusOp = () => {
    this.arithmeticOp((acc, cur) => acc - cur)
  }

  multiplyOp = () => {
    this.arithmeticOp((acc, cur) => acc * cur)
  }

  divideOp = () => {
    const [a, b] = this.getAB()
    if (b === 0) {
      throw new Error('Division by zero')
    }
    this.arithmeticOp((acc, cur) => acc / cur)
  }

  dupOp = () => {
    this.setOp(this.getB(), this._stack.length)
  }

  dropOp = () => {
    this.getB()
    this._stack = [...this._stack.slice(0, -1)]
  }

  swapOp = () => {
    const [a, b] = this.getAB()
    this._stack = [...this._stack.slice(0, -2), b, a]
  }

  overOp = () => {
    const [a, b] = this.getAB()
    this._stack = [...this._stack.slice(), a]
  }
}
