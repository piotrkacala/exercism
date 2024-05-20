/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let price = 0
  if (pizza === 'Margherita') {
    price = 7
  } else if (pizza === 'Caprese') {
    price = 9
  } else if (pizza === 'Formaggio') {
    price = 10
  }
  const extrasPrice = extras.reduce((acc, cur) => {
    if (cur === 'ExtraSauce') {
      return acc + 1
    }else {
      return acc + 2
    }
  }, 0)
  return price +extrasPrice
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
    return pizzaOrders.reduce((acc, cur) => {
    const price = pizzaPrice(cur.pizza, ...cur.extras)
    return acc + price
  }, 0)
}
