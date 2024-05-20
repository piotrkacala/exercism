//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (input) => {
  const one = COLORS.indexOf(input[0])
  const two = COLORS.indexOf(input[1])
  const string = String(one) + String(two)
  return Number(string)
};

const COLORS = ['black','brown','red','orange','yellow','green','blue','violet','grey','white']