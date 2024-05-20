export class Board {
  constructor(input) {
    this.win = ''
    const board = input.map(row => row.replaceAll(' ', ''))


    const step = (stat) => {
      const moves = [[-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0]]

      for (let i = 0; i < moves.length; i++) {
        const r = stat.rowColumn[0] + moves[i][0]
        const c = stat.rowColumn[1] + moves[i][1]
        const neighbour = board[r]?.[c]

        if (neighbour === undefined || neighbour !== stat.mark) {
          continue
        }

        const coords = `${r},${c}`

        if (stat.mark === 'O' && r === board.length - 1) {
          this.win = 'O'
          return
        } else if (stat.mark === 'X' && c === board[0].length - 1) {
          this.win = 'X'
          return
        }

        if (stat.history.includes(coords)) {
          continue
        }

        step({
          mark: stat.mark,
          rowColumn: [r, c],
          history: [...stat.history, coords]
        })
      }
    }

    for (let i = 0; i < board[0].length; i++) {
      const row = board[0]
      const isPlayers = row[i] === 'O'
      if (!isPlayers) {
        continue
      }
      if (0 === board.length - 1) {
        this.win = 'O'
        return
      }
      step({
        mark: 'O',
        rowColumn: [0, i],
        history: [`0,${i}`]
      })
    }

    for (let i = 0; i < board[0].length; i++) {
      const isPlayers = board[i][0] === 'X'
      if (!isPlayers) {
        continue
      }
      if (0 === board[0].length - 1) {
        this.win = 'X'
        return
      }
      step({
        mark: 'X',
        rowColumn: [i, 0],
        history: [`${i},0`]
      })

    }
  }

  winner() {
    return this.win
  }
}
