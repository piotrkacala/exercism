export class List {
  constructor(arr) {
    this.list = arr ?? []
  }

  compare(input) {
    const listA = [...this.list]
    const listB = [...input.list]
    const lenA = listA.length
    const lenB = listB.length

    if (lenA === 0 && lenB > 0) {
      return 'SUBLIST'
    } else if (lenA > 0 && lenB === 0) {
      return 'SUPERLIST'
    }

    const isEqual = (partA = listA, partB = listB) => partA.length === partB.length && partA.every((item, ind) => item === partB[ind])

    if (isEqual()) {
      return 'EQUAL'
    }

    for (let i = 0; i < lenB - lenA + 1; i++) {
      const slice = listB.slice(i, i + lenA)
      if (isEqual(undefined, slice)) {
        return 'SUBLIST'
      }
    }

    for (let i = 0; i < lenA - lenB + 1; i++) {
      const slice = listA.slice(i, i + lenB)
      if (isEqual(slice)) {
        return 'SUPERLIST'
      }
    }

    return 'UNEQUAL'
  }
}
