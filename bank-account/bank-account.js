export class BankAccount {
  constructor() {
    this._balance = null
  }

  open() {
    if (this._balance !== null) {
      throw new ValueError()
    }
    this._balance = 0
  }

  close() {
    if (this._balance === null) {
      throw new ValueError()
    }
    this._balance = null
  }

  deposit(value) {
    if (this._balance === null || value < 0) {
      throw new ValueError()
    }
    this._balance += value
  }

  withdraw(value) {
    if (this._balance === null ||
        value > this._balance ||
        value < 0) {
      throw new ValueError()
    }
    this._balance -= value
  }

  get balance() {
    if (this._balance === null) {
      throw new ValueError()
    }
    return this._balance
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
