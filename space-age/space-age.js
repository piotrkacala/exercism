//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const PLANETS = new Map([
  ['mercury', 0.2408467],
  ['venus', 0.61519726],
  ['earth', 1],
  ['mars', 1.8808158],
  ['jupiter', 11.862615],
  ['saturn', 29.447498],
  ['uranus', 84.016846],
  ['neptune', 164.79132]
])

export const age = (target, seconds) => Math.round(seconds / 31557600 / PLANETS.get(target) * 100)/100
