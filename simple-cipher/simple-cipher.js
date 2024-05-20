//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  static az = 'abcdefghijklmnopqrstuvwxyz'

  constructor(key = this.randomKey()) {
    this._key = key
  }

  shift = (i) => Cipher.az.indexOf(this._key[i % this._key.length])

  encode = (plain) => [...plain]
    .map((letter, index) => Cipher.az.at((Cipher.az.indexOf(letter) + this.shift(index)) % Cipher.az.length))
    .join('')

  decode = (code) => [...code]
    .map((letter, index) => Cipher.az.at((Cipher.az.indexOf(letter) - this.shift(index)) % Cipher.az.length))
    .join('')

  get key() {
    return this._key.join('')
  }

  randomKey() {
    let randomKey = []
    while (randomKey.length < 100) {
      randomKey.push(Cipher.az.charAt(Math.random() * Cipher.az.length))
    }
    return randomKey
  }
}
