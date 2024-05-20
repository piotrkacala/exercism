class CircularBuffer {
  constructor(size) {
    this.b = []
    this.size = size
  }

  write(val) {
    if (this.b.length === this.size) {
      throw new BufferFullError()
    }
    this.b.push(val)
  }

  read() {
    if (this.b.length === 0) {
      throw new BufferEmptyError()
    }
    return this.b.shift()
  }

  forceWrite(val) {
    if (this.b.length === this.size) {
      this.read()
    }
    this.write(val)
  }

  clear() {
    this.b = []
  }
}

export default CircularBuffer;

export class BufferFullError extends Error {
  constructor() {
    super('Buffer full')
    this.name = 'BufferFullError'
  }
}

export class BufferEmptyError extends Error {
  constructor() {
    super('Buffer empty')
    this.name = 'BufferEmptyError'
  }
}
