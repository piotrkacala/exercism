//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
class Node {
  constructor(d) {
    this.prev = null
    this.d = d
    this.next = null
  }
}

export class LinkedList {
  constructor(d) {
    this.head = null
    this.tail = null
  }
  
  push(p) {
    if (this.head === null) {
      this.head = new Node(p)
      this.tail = this.head
      return
    }
    let newNode = new Node(p)
    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = this.tail.next
  }

  pop() {
    const lastNode = this.tail
    const lastValue = lastNode.d
    const prevNode = this.tail.prev
    if (prevNode !== null) {
      prevNode.next = null
    } else {
      this.head = null
    }
    this.tail = prevNode
    return lastValue
  }

  shift() {
    const first = this.head
    const firstValue = this.head.d
    const second = this.head.next
    if (second !== null) {
      second.prev = null
    }
    this.head = second
    return firstValue
  }

  unshift(u) {
    const newNode = new Node(u)
    if (this.head !== null) {
      newNode.next = this.head
    } else {
      this.tail = newNode
    }
    this.head = newNode
  }

  delete(d) {
    let found = this.head
    while (true) {
      if (found === null) {
        break
      }
      if (found.d !== d) {
        found=found.next
        continue
      }
      const prevNode = found.prev
      const nextNode = found.next
      if (prevNode !== null) {
        prevNode.next = nextNode
      } else {
        this.head = nextNode
      }
      if (nextNode !== null) {
        nextNode.prev = prevNode
      } else {
        this.tail = prevNode
      }
      break
    }
  }

  count() {
    let c = 0
    let cur = this.head
    while (true) {
      if (cur === null) {
        break
      }
      c++
      cur = cur.next
    }
    return c
  }
}
