export const tournamentTally = (input) => {
  const top = 'Team                           | MP |  W |  D |  L |  P'
  if (input === '') {
    return top
  }
  const arr = input.split('\n').map(row => row.split(';'))

  const teams = [...new Set(arr.map(game => game.slice(0, 2)).flat())].map(team => ({
    name: team,
    MP: 0,
    W: 0,
    D: 0,
    L: 0,
    P: 0
  }))

  arr.forEach(game => {
    const a = teams.find(team => team.name === game[0])
    a.MP++
    const b = teams.find(team => team.name === game[1])
    b.MP++
    const result = game[2]
    if (result === 'win') {
      a.W++
      a.P += 3
      b.L++
    } else if (result === 'loss') {
      a.L++
      b.W++
      b.P += 3
    } else {
      a.D++
      a.P++
      b.D++
      b.P++
    }
  })

  const sorted = teams.sort((a, b) => {
    if (a.P === b.P) {
      return a.name.charCodeAt(0) - b.name.charCodeAt(0)
    }
    return b.P - a.P
  })

  const result = top + '\n' + sorted.map(row => [
    row.name.padEnd(30, ' '),
    String(row.MP).padStart(2, ' '),
    String(row.W).padStart(2, ' '),
    String(row.D).padStart(2, ' '),
    String(row.L).padStart(2, ' '),
    String(row.P).padStart(2, ' ')
  ].join(' | ')).join('\n')

  return result
};
