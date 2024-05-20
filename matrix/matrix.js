//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(input) {
    this.str = input
  }

  get rows() { 
    return this.str.split('\n').map(row => row.split(' ').map(str => Number(str)))
  }
  

  get columns() {
    const rows = this.rows
    return rows.reduce((acc, cur) => {
      cur.forEach((item, index) => acc[index].push(item))
      return acc
    }, rows[0].map(()=> []))
  }
}
