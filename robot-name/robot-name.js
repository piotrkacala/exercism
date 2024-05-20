// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
  constructor() {
    this._name = null
  }

  static db = new Set()

  get name() {
    if (this._name === null) {
      this._name = this.newName()
    }
    return this._name
  }

  reset() {
    this._name = null
  }

  newName() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const format = [letters, letters, numbers, numbers, numbers]
    let result

    do {
      result = format.map(item => item.at(Math.random() * item.length)).join('')
    } while (Robot.db.has(result))

    Robot.db.add(result)
    return result
  }
}

Robot.releaseNames = () => { Robot.db = new Set() };
