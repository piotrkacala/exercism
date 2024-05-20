export class QueenAttack {
  constructor({
    black: [blackRow, blackColumn] = [0, 3],
    white: [whiteRow, whiteColumn] = [7, 3],
  } = {}) {
    const all = [blackRow, blackColumn, whiteRow, whiteColumn]
    if (all.some(item => item < 0) || all.some(item => item > 7)) {
      throw new Error('Queen must be placed on the board')
    }

    if (blackRow === whiteRow && blackColumn === whiteColumn) {
      throw new Error('Queens cannot share the same space')
    }

    this.wr = whiteRow
    this.wc = whiteColumn
    this.br = blackRow
    this.bc = blackColumn
    this.can = false

    if (blackRow === whiteRow || blackColumn === whiteColumn) {
      this.can = true
    }

    const dr = whiteRow - blackRow
    const dc = whiteColumn - blackColumn
    if (Math.abs(dr) === Math.abs(dc)) {
      this.can = true
    }
  }

  get white() {
    return [this.wr, this.wc]
  }

  get black() {
    return [this.br, this.bc]
  }

  toString() {
    const res = [...Array(8)].map(row => '_'.repeat(8).split(''))
    res[this.wr][this.wc] = 'W'
    res[this.br][this.bc] = 'B'
    return res.map(row => row.join(' ')).join('\n')
  }

  get canAttack() {
    return this.can
  }
}
