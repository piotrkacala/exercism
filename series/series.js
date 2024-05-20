export class Series {
  constructor(series) {
    this.series = series
  }

  slices(sliceLength) {
    if (this.series.length === 0) {
      throw new Error('series cannot be empty')
    }

    if (sliceLength > this.series.length) {
      throw new Error('slice length cannot be greater than series length')
    }

    if (sliceLength === 0) {
      throw new Error('slice length cannot be zero')
    } else if (sliceLength < 0) {
      throw new Error('slice length cannot be negative')
    }

    const arr = [...this.series].map(item => Number(item))

    return arr.reduce((acc, cur, ind) => {
      if (ind + sliceLength > this.series.length) {
        return acc
      }
      acc.push(arr.slice(ind, ind + sliceLength))
      return acc
    }, [])
  }
}
