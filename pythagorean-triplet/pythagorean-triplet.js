export function triplets({ minFactor = 1, maxFactor, sum }) {
  if (maxFactor === undefined) {
    maxFactor = sum
  }

  const results = []

  for (let a = minFactor; a <= maxFactor; a++) {
    for (let b = Math.max(a + 1, minFactor); b <= maxFactor; b++) {
        let c = sum - b - a
        if (c < b || c > maxFactor) {
          continue
        }
        if (a ** 2 + b ** 2 !== c ** 2) {
          continue
        }
        results.push(new Triplet(a, b, c))
    }
  }
  return results
}

class Triplet {
  constructor(a, b, c) {
    this.t = [a, b, c]
  }

  toArray() {
    return this.t
  }
}
