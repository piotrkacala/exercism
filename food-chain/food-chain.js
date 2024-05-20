export class Song {
  verse(v) {
    return this.getVerse(v).join('\n')
  }

  verses(from, to) {
    let out = ''
    for (let i = from; i <= to; i++) {
      out += this.getVerse(i).join('\n') + '\n'
    }
    return out
  }

  getVerse(thisVerse) {
    const NAMES = [
      ['fly', "I don't know why she swallowed the fly. Perhaps she'll die."],
      ['spider', 'It wriggled and jiggled and tickled inside her.'],
      ['bird', 'How absurd to swallow a bird!'],
      ['cat', 'Imagine that, to swallow a cat!'],
      ['dog', 'What a hog, to swallow a dog!'],
      ['goat', 'Just opened her throat and swallowed a goat!'],
      ['cow', "I don't know how she swallowed a cow!"]

    ]

    if (thisVerse === 8) {
      return [`I know an old lady who swallowed a horse.\nShe's dead, of course!\n`]
    }

    const animal = NAMES[thisVerse - 1]
    const open = `I know an old lady who swallowed a ${animal[0]}.`
    const secondary = animal[1]
    let mid = ''

    for (let i = thisVerse; i > 1; i--) {
      mid += `She swallowed the ${NAMES[i - 1][0]} to catch the ${NAMES[i - 2][0]}${i === 3 ? ' that wriggled and jiggled and tickled inside her' : ''}.\n`
    }

    if (thisVerse > 1) {
      mid += NAMES[0][1] + '\n'

    }

    return [open, secondary, mid]
  }
}
