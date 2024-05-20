export const knapsack = (maximumWeight, items) => {
  let best = 0
  const step = (weight, sum, availableItems) => {
    for (let i = 0; i < availableItems.length; i++) {
      const newWeight = weight + availableItems[i].weight
      const newTotal = sum + availableItems[i].value
      if (newWeight > maximumWeight) {
        continue
      }
      if (newTotal > best) {
        best = newTotal
      }
      step(newWeight, newTotal, availableItems.toSpliced(i, 1))
    }
  }
  step(0, 0, [...items])
  return best
};
