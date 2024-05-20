export class Crypto {
  constructor(txt) {
    const t = txt
      .toLowerCase()
      .replaceAll(/[^a-z\d]/g, '')

    const c = Math.ceil(Math.sqrt(t.length))
    const re = new RegExp('(.{' + c + '})', 'g')
    const groups = t
      .replaceAll(re, '$1 ')
      .split(' ', c)
      .map(el => el.padEnd(c, ' '))
    const r = groups.length
    const res = []

    for (let i = 0; i < c; i++) {
      let str = ''
      for (let j = 0; j < r; j++) {
        str += groups[j][i]
      }
      res.push(str)
    }
    this.cipher = res.join(' ')
  }

  get ciphertext() {
    return this.cipher
  }
}
