export const prime = (nth) => {
  if (nth === 0) {
    throw new Error('there is no zeroth prime')
  }

  const maxNum = 1000005
  const numbers = Array(maxNum).fill(true)
  const primes = []

  for (let i = 2; i < numbers.length; i++) {
    if (numbers[i]) {
      primes.push(i)

      for (let j = i ** 2; j < numbers.length; j += i) {
        numbers[j] = false
      }
    }
  }

  return primes[nth - 1]
};
