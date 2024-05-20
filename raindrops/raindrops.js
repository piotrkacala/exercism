export const convert = (num) => [
    [3, 'Pling'],
    [5, 'Plang'],
    [7, 'Plong']
  ].map(sound => num % sound[0] === 0 ? sound[1] : '').join('') || String(num)

