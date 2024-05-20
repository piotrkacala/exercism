export const abilityModifier = (num) => {
  if (num < 3) {
    throw new Error('Ability scores must be at least 3')
  } else if (num > 18) {
    throw new Error('Ability scores can be at most 18')
  }
  return Math.floor((num - 10) / 2)
};

export class Character {
  constructor() {
    this.strength = Character.rollAbility()
    this.dexterity = Character.rollAbility()
    this.constitution = Character.rollAbility()
    this.intelligence = Character.rollAbility()
    this.wisdom = Character.rollAbility()
    this.charisma = Character.rollAbility()
    this.hitpoints = 10 + abilityModifier(this.constitution)
  }
  static rollAbility() {
    const dice = [...Array(4)].map(() => Math.round(Math.random() * 5) + 1)
    const lowest = Math.min(...dice)
    return dice.reduce((a, c) => a + c) - lowest
  }
}
