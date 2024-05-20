export class Clock {
  constructor(hour = 0, minute = 0) {
    this.minutes = (hour * 60) + minute
  }

  toString() {
    let min = this.minutes
    while (min < 0) {
      min = 24 * 60 + min
    }
    const h = Math.floor(min / 60) % 24
    const m = min % 60
    return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0')
  }

  plus(p) {
    this.minutes = this.minutes + p
    return this
  }

  minus(m) {
    this.minutes = this.minutes - m
    return this
  }

  equals(clock) {
    return this.toString() === clock.toString()
  }
}
