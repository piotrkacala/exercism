export class DiffieHellman {
  constructor(p, g) {
    const isPrime = (num) => {
      for (let i = 2; i ** 2 <= num; i++) {
        if (num % i === 0) {
          return false
        }
      }
      return num > 1
    }

    if (!isPrime(p) || !isPrime(g)) {
      throw new Error('input error')
    }

    this.p = p
    this.g = g
  }

  getPublicKey(privateKey) {
    if (privateKey <= 1 || privateKey >= this.p) {
      throw new Error('input error')
    }
    return this.g ** privateKey % this.p
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return theirPublicKey ** myPrivateKey % this.p
  }
}
