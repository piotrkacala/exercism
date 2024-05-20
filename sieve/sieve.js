export const primes = (max) => {
  const nums = Array(max + 1).fill(true)
  const primes = []
  for (let i = 2; i < nums.length; i++) {
    if (nums[i]) {
      primes.push(i)
      for (let j = i ** 2; j < nums.length; j += i) {
        nums[j] = false
      }
    }
  }
  return primes
};
