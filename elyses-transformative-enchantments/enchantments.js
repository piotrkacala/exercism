// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  // throw new Error('Implement the seeingDouble function');
  return deck.map(item => item * 2)
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  // throw new Error('Implement the threeOfEachThree function');
  return deck.reduce((acc, cur) => {
    if (cur === 3) {
      acc.push(3,3)
    }
    acc.push(cur)
    return acc
  },[])
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  // throw new Error('Implement the middleTwo function');
  while (deck.length > 2) {
    deck.pop()
    deck.shift()
  }
  return deck
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  // throw new Error('Implement the sandwichTrick function');
  const one = deck.pop()
  const two = deck.shift()
  return deck.toSpliced(deck.length/2, 0, one, two)
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  // throw new Error('Implement the twoIsSpecial function');
  return deck.filter(item => item===2)
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  // throw new Error('Implement the perfectlyOrdered function');
  return deck.sort((a,b) => a-b)
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  // throw new Error('Implement the reorder function');
  return deck.reverse()
}
