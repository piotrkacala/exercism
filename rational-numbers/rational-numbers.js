export class Rational {
  constructor(inputA, inputB) {
    const gcd = ((a, b) => {
      while (b !== 0) {
        const r = b
        b = a % b
        a = r
      }
      return a
    })(inputA, inputB)

    this.ab = [inputA / gcd + 0, inputB / gcd]
  }

  add(rat) {
    const [a1, b1] = this.ab
    const [a2, b2] = rat.ab
    const a3 = a1 * b2 + a2 * b1
    const b3 = b1 * b2
    return new Rational(a3, b3)
  }

  sub(rat) {
    const [a1, b1] = this.ab
    const [a2, b2] = rat.ab
    const a3 = a1 * b2 - a2 * b1
    const b3 = b1 * b2
    return new Rational(a3, b3)
  }

  mul(rat) {
    const [a1, b1] = this.ab
    const [a2, b2] = rat.ab
    const a3 = a1 * a2
    const b3 = b1 * b2
    return new Rational(a3, b3)
  }

  div(rat) {
    const [a1, b1] = this.ab
    const [a2, b2] = rat.ab
    const a3 = a1 * b2
    const b3 = a2 * b1
    return new Rational(a3, b3)
  }

  abs() {
    const [a1, b1] = this.ab
    return new Rational(Math.abs(a1), Math.abs(b1))
  }

  exprational(e) {
    const [a1, b1] = this.ab
    const a2 = a1 ** e
    const b2 = b1 ** e
    return new Rational(a2, b2)
  }

  expreal(x) {
    const [a1, b1] = this.ab
    return (x ** (1 / b1)) ** a1;
  }

  reduce() {
    return this
  }
}
