export class Allergies {
  ALLERGIES = [
    'cats',
    'pollen',
    'chocolate',
    'tomatoes',
    'strawberries',
    'shellfish',
    'peanuts',
    'eggs',
  ]

  constructor(score) {
    this.binary = score.toString(2).padStart(8, '0').slice(-8)
  }

  list() {
    return [...this.binary].reduce((acc, cur, index) => {
      if (cur === '1') {
        acc.unshift(this.ALLERGIES[index])
      }
      return acc
    }, [])
  }

  allergicTo(name) {
    return this.binary.at(this.ALLERGIES.indexOf(name)) === '1'
  }
}
