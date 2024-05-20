
class WordSearch {
  constructor(input) {
    this.g = input
  }

  find(words) {
    const res = words.reduce((acc, word) => {
      acc[word] = this.checkAll(word)
      return acc
    }, {})
    return res
  }

  checkAll(word) {
    const getRows = (word) => this.g.reduce((acc, cur, rowIndex) => acc || this.checkRow(word, cur, rowIndex + 1), undefined)

    const getColumns = (word, index, arr) => {
      const column = arr.map(item => item[index]).join('')
      let found = this.checkRow(word, column, index + 1)

      if (found) {
        found.start.reverse()
        found.end.reverse()
      }

      return found

    }

    const shiftGrid = (reverse) => {
      let shiftedGrid = [...this.g].map((row, index) => ''.padStart(index, ' ') + row + ''.padEnd(row.length - index))
      if (reverse) {
        shiftedGrid = [...this.g].map((row, index) => ''.padStart(row.length - index, ' ') + row + ''.padEnd(index))
      }

      return shiftedGrid
    }



    const fromRows = getRows(word)
    if (fromRows) {
      return fromRows
    }

    const revRows = getRows([...word].reverse().join(''))
    if (revRows) {
      const start = revRows.start[1]
      const end = revRows.end[1]
      revRows.start[1] = end
      revRows.end[1] = start
      return revRows
    }

    const topBottom = this.g.map((row, index) => getColumns(word, index, [...this.g])).reduce((acc, cur) => cur || acc)
    if (topBottom) {
      return topBottom
    }

    const bottomTop = this.g.map((row, index) => getColumns(word, index, [...this.g].reverse())).reduce((acc, cur) => cur || acc)
    if (bottomTop) {
      bottomTop.start[0]--
      bottomTop.end[0] = bottomTop.start[0] - word.length + 1
      return bottomTop
    }

    let shifted = shiftGrid()

    let topBottomDiag = [...shifted[0]].map((row, index) => getColumns(word, index, [...shifted])).reduce((acc, cur) => cur || acc)
    if (topBottomDiag) {
      topBottomDiag.start[1] = topBottomDiag.start[1] - topBottomDiag.start[0] + 1
      topBottomDiag.end[1] = topBottomDiag.end[1] - topBottomDiag.end[0] + 1
      return topBottomDiag
    }

    let bottomTopDiag = [...shifted[0]].map((row, index) => getColumns(word, index, [...shifted].reverse())).reduce((acc, cur) => cur || acc)
    if (bottomTopDiag) {
      bottomTopDiag.start[0]++
      bottomTopDiag.end[0] = bottomTopDiag.start[0] - word.length + 1
      bottomTopDiag.start[1] = bottomTopDiag.start[1] - bottomTopDiag.start[0] + 1
      bottomTopDiag.end[1] = bottomTopDiag.end[1] - bottomTopDiag.end[0] + 1
      return bottomTopDiag
    }

    shifted = shiftGrid(true)

    topBottomDiag = [...shifted[0]].map((row, index) => getColumns(word, index, [...shifted])).reduce((acc, cur) => cur || acc)
    if (topBottomDiag) {
      topBottomDiag.start[1] = topBottomDiag.start[1] - this.g.length - topBottomDiag.start[0] + 1
      topBottomDiag.end[1] = topBottomDiag.start[1] + word.length - 1
      return topBottomDiag
    }

    bottomTopDiag = [...shifted[0]].map((row, index) => getColumns(word, index, [...shifted].reverse())).reduce((acc, cur) => cur || acc)
    if (bottomTopDiag) {
      bottomTopDiag.start[0] = this.g.length - bottomTopDiag.start[0] + 1
      bottomTopDiag.end[0] = bottomTopDiag.start[0] - word.length + 1
      bottomTopDiag.start[1] = bottomTopDiag.start[1] - this.g.length + bottomTopDiag.start[0] - 1
      bottomTopDiag.end[1] = bottomTopDiag.end[1] - word.length - 1
      return bottomTopDiag
    }
  }

  checkRow(word, row, i) {
    if (row.includes(word)) {
      const ind = row.indexOf(word)
      return {
        start: [i, ind + 1],
        end: [i, ind + word.length]
      }
    }
  }
}

export default WordSearch;
