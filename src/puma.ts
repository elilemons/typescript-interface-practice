import Cat from './cat';

const Puma = class Puma extends Cat {
  pet(): string { return `${this.name} tries to devour your hand.`; }
  feed(): string { return `${this.name} snatches the food from you and eats it, eyeing you warily.`; }
  play(): string { return `${this.name} does not want to play. ${this.name} wants to eat you.`; }
}

export default Puma;