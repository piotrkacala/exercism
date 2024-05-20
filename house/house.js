export class House {
  static verse(v) {
    return this.getVerse(v)
  }

  static verses(start, end) {
    const res = []
    for (let i = start; i <= end; i++) {
      res.push(...this.getVerse(i).slice(0, -1), '')
    }
    return res.slice(0, -1)
  }

  static getVerse(v) {
    const OPEN = [
      'This is the house that Jack built.',
      'This is the malt',
      'This is the rat',
      'This is the cat',
      'This is the dog',
      'This is the cow with the crumpled horn',
      'This is the maiden all forlorn',
      'This is the man all tattered and torn',
      'This is the priest all shaven and shorn',
      'This is the rooster that crowed in the morn',
      'This is the farmer sowing his corn',
      'This is the horse and the hound and the horn',
    ]

    const CLOSE = [
      'that belonged to the farmer sowing his corn',
      'that kept the rooster that crowed in the morn',
      'that woke the priest all shaven and shorn',
      'that married the man all tattered and torn',
      'that kissed the maiden all forlorn',
      'that milked the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      undefined
    ]

    const start = OPEN[v - 1]
    const rest = CLOSE.slice(-v)
    return [start, ...rest]
  }
}
