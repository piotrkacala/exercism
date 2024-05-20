export class HighScores {
  constructor(input) {
    this._score = input
  }

  get scores() {
    return this._score
  }

  get latest() {
    return this._score.at(-1)
  }

  get personalBest() {
    return Math.max(...this._score)
  }

  get personalTopThree() {
    return this._score.sort((a,b) => b-a).slice(0,3)
  }
}
