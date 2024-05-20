export class ComplexNumber {
  constructor(a, b) {
    this.a = a
    this.b = b

  }
  
  get real() {
    return this.a
  }
  
  get imag() {
    return this.b
  }
  
  getConst (cn) {
    return [this.a, this.b, cn.a, cn.b]
  }

  add(cn) {
    const [a, b, c, d] = this.getConst(cn)
    const real = a + c
    const imag = b + d
    return new ComplexNumber(real, imag)
  }

  sub(cn) {
    const [a, b, c, d] = this.getConst(cn)
    const real = a - c
    const imag = b - d
    return new ComplexNumber(real, imag)
  }

  div(cn) {
    const [a, b, c, d] = this.getConst(cn)
    const real = (a * c + b * d)/(c**2 + d**2)
    const imag = (b * c - a * d)/(c**2 + d**2)
    return new ComplexNumber(real, imag)
  }

  mul(cn) {
    const [a, b, c, d] = this.getConst(cn)
    const real = a * c - b * d
    const imag = b * c + a * d
    return new ComplexNumber(real, imag)
  }

  get abs() {
    return Math.sqrt(this.a**2 + this.b**2)
  }

  get conj() {
    return new ComplexNumber(this.a, this.b === 0 ? 0 : -this.b)
  }

  get exp() {
    const real = Math.E**this.a * Math.cos(this.b)
    const imag = Math.sin(this.b)
    return new ComplexNumber(real, imag)
  }
}
