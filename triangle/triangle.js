export class Triangle {
  constructor(...sides) {
    const [a,b,c] = sides
    this.sides = new Set(sides).size
    this.isTriangle = !sides.includes(0) && a + b >= c && b + c >= a && a + c >= b
  }

  get isEquilateral() {
    return this.isTriangle && this.sides === 1
  }

  get isIsosceles() {
    return this.isTriangle && this.sides <= 2
  }

  get isScalene() {
    return this.isTriangle && this.sides === 3
  }
}
