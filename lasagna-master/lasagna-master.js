/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(minutesRemaining) {
  if (minutesRemaining === undefined) {
    return 'You forgot to set the timer.'
  }
  if (minutesRemaining === 0) {
    return 'Lasagna is done.'
  }
  return 'Not done, please wait.'
}

export function preparationTime(layers, minutesAvg = 2) {
  return layers.length*minutesAvg
}

export function quantities(layers) {
  let noodles = 0, sauce = 0
  layers.forEach(item => {
    if (item === 'noodles') {
      noodles += 50
    } else if (item === 'sauce'){
      sauce += 0.2
    }
  })
  
  return {
    noodles, sauce
  }
}

export function addSecretIngredient(fromFriend, own) {
  own.push(fromFriend[fromFriend.length-1])
}

export function scaleRecipe(recepie, portions) {
  const scale = portions / 2
  const newRecepie = {}
  for (const item in recepie) {
    const newValue = recepie[item] * scale
    newRecepie[item] = newValue
  }
  return newRecepie
  
}