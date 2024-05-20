export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Invalid Input';
  }
}

export class Robot {
  constructor() {
    this.x = 0
    this.y = 0
    this.dir = 0
    this.name = ['north', 'east', 'south', 'west']
  }
  get bearing() {
    return this.name[this.dir]
  }

  get coordinates() {
    return [this.x, this.y]
  }

  place({ x, y, direction }) {
    const dir = this.name.indexOf(direction)
    if (dir === -1) {
      throw new InvalidInputError()
    }
    this.dir = dir
    this.x = x
    this.y = y
  }

  evaluate(instructions) {
    const TURN = {
      'R': 1,
      'L': -1,
      'A': 0
    }

    instructions.split('').forEach(instr => {
      this.dir = (4 + this.dir + TURN[instr]) % 4

      if (instr === 'A') {
        this.x = this.x + [0, 1, 0, -1][this.dir]
        this.y = this.y + [1, 0, -1, 0][this.dir]
      }
    })
  }
}
