//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (input) => {
const FROM = ['G', 'C', 'T', 'A']
  const TO = ['C', 'G', 'A', 'U']
  return input.split('').map(letter => TO[FROM.indexOf(letter)]).join('')
};
