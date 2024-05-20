export class Palindromes {
  static generate(opt) {
    const { maxFactor, minFactor } = opt
    let min = null
    let max = null

    if (minFactor > maxFactor) {
      throw new Error('min must be <= max')
    }

    for (let i = minFactor ** 2; i <= maxFactor ** 2; i++) {
      if (isPalindrome(i) && hasFactors(i)) {
        min = i
        break
      }
    }
    for (let i = maxFactor ** 2; i >= minFactor ** 2; i--) {
      if (isPalindrome(i) && hasFactors(i)) {
        max = i
        break
      }
    }

    return {
      smallest: {
        value: min,
        factors: hasFactors(min, true)
      },
      largest: {
        value: max,
        factors: hasFactors(max, true)
      }
    }

    function isPalindrome(num) {
      return String(num) === [...String(num)].reverse().join('')
    }

    function hasFactors(num, getFactors = false) {
      const fact = []
      for (let i = minFactor; i <= maxFactor; i++) {
        if (num % i === 0 &&
          num / i >= minFactor &&
          num / i <= maxFactor) {
          if (!getFactors) {
            return true
          }
          fact.push([i, num / i].sort().join(','))
        }
      }
      if (getFactors) {
        return [...new Set(fact)].map(item => item.split(',').map(str => Number(str)))
      }
      return false
    }
  }
}
