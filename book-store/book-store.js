//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  const COST = 800
  const PRICE = [1, 0.95, 0.9, 0.8, 0.75]
  let lowestTotal = books.length * 800
  const uniq = (order) => new Set(order)

  loop(books, 5, 0)
  
  function loop(oldOrder, maxSize, total) {
    if (maxSize <1 || oldOrder.length === 0) {
      lowestTotal = total < lowestTotal ? total : lowestTotal
      return
    }

    if (maxSize === 1) {
      const newTotal = (total + oldOrder.length * 800)
      lowestTotal = newTotal < lowestTotal ? newTotal : lowestTotal
      return
    }
    
    loop(oldOrder, maxSize-1, total)
    
    const order = oldOrder.slice()
    const unique = uniq(order)
    const size = unique.size

    const mostOrdered = (items) => {
      let most = [0, 0]
      unique.forEach(item => {
        const hits = items.slice().filter(el => el === item).length
        if (hits > most[1]) {
          most = [item, hits]
        }
      })
      return most[0]
    }
    
    let itemsToRemove = maxSize
    let removed = []
    
    while(itemsToRemove) {
      const itemToRemove = mostOrdered(order.filter(el => removed.indexOf(el) === -1))
      order.splice(order.indexOf(itemToRemove), 1)
      itemsToRemove--
      removed.push(itemToRemove)
      if (removed.length === size) {
        break
      }
    }
    const newTotal = total + (removed.length * 800 * PRICE[removed.length-1])
    loop(order, maxSize, newTotal)
  }
  return lowestTotal
};
