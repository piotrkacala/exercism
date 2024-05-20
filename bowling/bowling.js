export class Bowling {
  constructor() {
    this.r = [[]]
  }

  roll(n) {
    if (n < 0) {
      throw new Error('Negative roll is invalid')
    }

    if (n > 10) {
      throw new Error('Pin count exceeds pins on the lane')
    }

    const lastFrame = this.r.at(-1)
    const isOpen = lastFrame.length < 2 && lastFrame.reduce((acc, cur) => acc + cur, 0) < 10
    const gameClosed = this.r.length === 10 && lastFrame.length === 2 && lastFrame.reduce((acc, cur) => acc + cur, 0) < 10

    if (gameClosed || this.r[10]?.length === 2 || (this.r[10]?.length === 1 && this.r[9].length === 2)) {
      throw new Error('Cannot roll after game is over')
    }

    if (isOpen && lastFrame.reduce((acc, cur) => acc + cur, 0) + n > 10) {
      throw new Error('Pin count exceeds pins on the lane')
    }

    if (isOpen) {
      lastFrame.push(n)
    } else {
      this.r.push([n])
    }
  }

  score() {
    if (this.r.length < 10) {
      throw new Error('Score cannot be taken until the end of the game')
    }

    let score = 0

    this.r.forEach((frame, i) => {
      if (i > 9) {
        return
      }

      const sum = frame.reduce((acc, cur) => acc + cur, 0)
      score += sum

      if (sum < 10) {
        return
      }

      const nextThrow = this.r[i + 1]?.[0]

      if (nextThrow !== undefined) {
        score += nextThrow
      } else {
        throw new Error('Score cannot be taken until the end of the game')
      }

      if (frame.length !== 1) {
        return
      }

      let nextNext = this.r[i + 1]?.[1]

      if (nextNext === undefined) {
        nextNext = this.r[i + 2]?.[0]
      }

      if (nextNext === undefined) {
        throw new Error('Score cannot be taken until the end of the game')
      }

      score += nextNext
    })

    return score
  }
}
