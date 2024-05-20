export class ZebraPuzzle {
  constructor() {
    const colors = ['red', 'green', 'ivory', 'yellow', 'blue']
    const nats = ['Englishman', 'Spaniard', 'Ukrainian', 'Norwegian', 'Japanese']
    const pets = ['dog', 'snails', 'fox', 'horse', 'zebra']
    const drinks = ['coffee', 'tea', 'milk', 'orange juice', 'water']
    const smokes = ['The Old Gold', 'Kools', 'Chesterfields', 'Lucky Strike', 'Parliaments']
    let possible = null
    
    check(0, [])
    
    function check(h, prev) {
      // There are five houses.
      if (h === 5) {
        possible=prev
        return
      }
      for (let c = 0; c < 5; c++) {
        if (prev.some(house => house[1] === c)) {
          continue
        }
        for (let n = 0; n < 5; n++) {
          if (prev.some(house => house[2] === n)) {
            continue
          }
          for (let p = 0; p < 5; p++) {
            if (prev.some(house => house[3] === p)) {
              continue
            }
            for (let d = 0; d < 5; d++) {
              if (prev.some(house => house[4] === d)) {
                continue
              }
              for (let s = 0; s < 5; s++) {
                if (prev.some(house => house[5] === s)) {
                  continue
                }
                // The Englishman lives in the red house.
                if ((n === 0 || c === 0) && !(n === 0 && c === 0)) {
                  continue
                }
                // The Spaniard owns the dog.
                if ((n === 1 || p === 0) && !(n === 1 && p === 0)) {
                  continue
                }
                // Coffee is drunk in the green house.
                if ((d === 0 || c === 1) && !(d === 0 && c === 1)) {
                  continue
                }
                // The Ukrainian drinks tea.
                if ((n === 2 || d === 1) && !(n === 2 && d === 1)) {
                  continue
                }
                // The green house is immediately to the right of the ivory house.
                if (c === 1 && h === 0) {
                  continue
                } else if (c === 1 && prev.at(-1)[1] !== 2) {
                  continue
                }
                // The Old Gold smoker owns snails.
                if ((s === 0 || p === 1) && !(s === 0 && p === 1)) {
                  continue
                }
                // Kools are smoked in the yellow house.
                if ((s === 1 || c === 3) && !(s === 1 && c === 3)) {
                  continue
                }
                // Milk is drunk in the middle house.
                if ((h === 2 || d === 2) && !(h === 2 && d === 2)) {
                  continue
                }
                // The Norwegian lives in the first house.
                if ((h === 0 || n === 3) && !(h === 0 && n === 3)) {
                  continue
                }
                // The man who smokes Chesterfields lives in the house next to the man with the fox.
                if (s === 2 && p === 2) {
                  continue
                } else if (s === 2 && prev.some(house => house[3] === 2) && prev.at(-1)[3] !== 2) {
                  continue
                } else if (p === 2 && prev.some(house => house[5] === 2) && prev.at(-1)[5] !== 2) {
                  continue
                }
                // Kools are smoked in the house next to the house where the horse is kept.
                if (s === 1 && p === 3) {
                  continue
                } else if (s === 1 && prev.some(house => house[3] === 3) && prev.at(-1)[3] !== 3) {
                  continue
                } else if (p === 3 && prev.some(house => house[5] === 1) && prev.at(-1)[5] !== 1) {
                  continue
                }
                // The Lucky Strike smoker drinks orange juice.
                if ((s === 3 || d === 3) && !(s === 3 && d === 3)) {
                  continue
                }
                // The Japanese smokes Parliaments.
                if ((n === 4 || s === 4) && !(n === 4 && s === 4)) {
                  continue
                }
                // The Norwegian lives next to the blue house.
                if (n === 3 && c === 4) {
                  continue
                } if (n === 3 && prev.some(house => house[1] === 4) && prev.at(-1)[1] !== 4) {
                  continue
                } else if (c === 4 && prev.some(house => house[2] === 3) && prev.at(-1)[2] !== 3) {
                  continue
                }

                check(h + 1, [...prev, [h, c, n, p, d, s]])
              }
            }
          }
        }
      }
    }

    this.water = nats[possible.find(house => house[4]===4)[2]]
    this.zebra = nats[possible.find(house => house[3]===4)[2]]
  }

  waterDrinker() {
    return this.water
  }

  zebraOwner() {
    return this.zebra
  }
}
