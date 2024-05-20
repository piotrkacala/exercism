export class ResistorColorTrio {
  constructor(input) {
    const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']

    const allValid = input.every(color => COLORS.includes(color))
    if (!allValid) {
      throw new Error('/invalid color/')
    }

    let val = input.slice(0, 2).map(color => COLORS.indexOf(color)).join('')
    const exp = 10 ** (COLORS.indexOf(input[2]))
    val = val * exp

    let unit = 'ohms'
    if (val > 1000) {
      unit = 'kilo' + unit
      val = val / 1000
    }

    this.value = Number(val)
    this.unit = unit
  }

  get label() {
    return `Resistor value: ${this.value} ${this.unit}`
  }
}
