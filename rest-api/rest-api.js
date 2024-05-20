export class RestAPI {
  constructor({ users }) {
    this.users = users
  }

  get(url) {
    const query = url.slice(1).split('?')[1]?.split('=')[1]
    if (query) {
      let res = this.users.filter(item => item.name === query)
      return { users: res }
    }
    return { users: this.users }
  }

  post(url, payload) {
    const type = url.slice(1).split('?')[0]
    if (type === 'add') {
      const newUser = {
        name: payload.user,
        owes: {},
        owed_by: {},
        balance: 0,
      }
      this.users.push(newUser)
      return newUser
    }

    const lend = this.users.find(u => u.name === payload.lender)
    if (lend.owed_by[payload.borrower] === undefined) {
      lend.owed_by[payload.borrower] = -lend.owes[payload.borrower] || 0
    }
    if (lend.owes[payload.borrower] !== undefined) {
      lend.owes[payload.borrower] -= payload.amount
    }
    if (lend.owes[payload.borrower] <= 0) {
      delete lend.owes[payload.borrower]
    }
    lend.owed_by[payload.borrower] += payload.amount
    if (lend.owed_by[payload.borrower] <= 0) {
      delete lend.owed_by[payload.borrower]
    }
    lend.balance += payload.amount

    const borr = this.users.find(u => u.name === payload.borrower)
    if (borr.owes[payload.lender] === undefined) {
      borr.owes[payload.lender] = -borr.owed_by[payload.lender] || 0
    }
    if (borr.owed_by[payload.lender] !== undefined) {
      borr.owed_by[payload.lender] -= payload.amount
    }
    if (borr.owed_by[payload.lender] <= 0) {
      delete borr.owed_by[payload.lender]
    }
    borr.owes[payload.lender] += payload.amount
    if (borr.owes[payload.lender] <= 0) {
      delete borr.owes[payload.lender]
    }
    borr.balance -= payload.amount

    return { users: [lend, borr].sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0)) }
  }
}
