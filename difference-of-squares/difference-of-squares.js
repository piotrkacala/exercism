export class Squares {
  constructor(n) {
    this.n = n + 1
  }

  get sumOfSquares() {
    return [...Array(this.n)].reduce((acc, cur, ind) => acc + ind ** 2, 0)
  }

  get squareOfSum() {
    return [...Array(this.n)].reduce((acc, cur, ind) => acc + ind, 0) ** 2
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares
  }
}
