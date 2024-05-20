// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const string1 = array1.join('')
  const string2 = array2.join('')
  return Number(string1) + Number(string2)
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let stringValue = String(value)
  while (stringValue.length > 0) {
    
  if (stringValue.length === 1) {
    return true
  }
  if (stringValue.at(0) !== stringValue.at(-1)) {
    return false
  }
  stringValue = stringValue.slice(1,-1)
  }
  return true
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === undefined || input === null || input === '') {
    return 'Required field'
  }
  if (typeof Number(input) !== 'number'|| isNaN(Number(input)) || input === '0') {
    return 'Must be a number besides 0'
  }
  return ''
}
