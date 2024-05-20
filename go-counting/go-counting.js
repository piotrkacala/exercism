export class GoCounting {
  constructor(board) {
    this.board = board
  }

  getTerritory(x, y) {
    if (x < 0 || y < 0 || y > this.board.length - 1 || x > this.board[0].length - 1) {
      return {
        error: 'Invalid coordinate'
      }
    }
    if (this.board[y][x] !== ' ') {
      return { owner: 'NONE', territory: [] }
    }

    const data = this.getNearOne(x, y)
    const uniq = new Set(data[0].flat(Infinity).filter(item => item !== undefined))
    const territory = data[1].sort().map(e => e.split(',').map(Number))
    let owner = 'BLACK'
    if (uniq.size > 1) {
      owner = 'NONE'
    } else if ([...uniq][0] === 'W') {
      owner = 'WHITE'
    }

    return {
      owner,
      territory
    }
  }

  getTerritories() {
    const terr = {
      territoryBlack: [],
      territoryWhite: [],
      territoryNone: [],
    }
    for (let x = 0; x < this.board[0].length; x++) {
      for (let y = 0; y < this.board.length; y++) {
        if (this.board[y][x] === ' ') {
          const point = this.getNear(x, y)
          const uniq = [...new Set(point)]
          let owner = 'territoryBlack'
          if (uniq.length > 1 || uniq[0] === undefined) {
            owner = 'territoryNone'
          } else if (uniq[0] === 'W') {
            owner = 'territoryWhite'
          }
          terr[owner].push([x, y])
        }
      }
    }
    return terr
  }

  getNearOne(x, y, prev = []) {
    let points = []
    const near = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    const val = near.map(coord => {
      const nx = x + coord[0]
      const ny = y + coord[1]
      if (prev.includes(`${nx},${ny}`)) {
        return
      }
      let inter = this.board[ny]?.[nx]
      if (inter === ' ') {
        const ret = this.getNearOne(nx, ny, [...prev, `${x},${y}`])
        inter = ret[0]
        points.push(ret[1])

      }
      return inter
    })
    return [val, [...points, `${x},${y}`].flat()]
  }

  getNear(x, y, prev = []) {
    const near = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    const val = near.map(coord => {
      const nx = x + coord[0]
      const ny = y + coord[1]
      if (prev.includes(`${nx},${ny}`)) {
        return
      }
      let inter = this.board[ny]?.[nx]
      if (inter === ' ') {
        inter = this.getNear(nx, ny, [...prev, `${x},${y}`])
      }
      return inter
    })
    return val.flat().filter(item => item !== undefined)
  }
}
