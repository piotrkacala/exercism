//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const txt = message.trim()
  const hasLetters = /[A-Za-z]/.test(txt)
  if (txt === '') {
    return 'Fine. Be that way!'
  }

  if (txt.toUpperCase() === txt && txt.at(-1) === '?' && hasLetters) {
    return "Calm down, I know what I'm doing!"
  }

  if (txt.toUpperCase() === txt && hasLetters) {
    return 'Whoa, chill out!'
  }

  if (txt.at(-1) === '?') {
    return 'Sure.'
  }

  return 'Whatever.'
};
