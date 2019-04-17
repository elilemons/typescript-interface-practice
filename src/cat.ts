import { Animal, AnimalConstructor, AnimalInterface } from './animal';

const Cat: AnimalConstructor = class Cat extends Animal implements AnimalInterface {
  name: string;
  constructor(name: string) { super(); this.name = name; }
  pet(): string { return `${this.name} purrs.`; }
  feed(): string { return `${this.name} gobbles up the food.`; }
  play(): string { return `${this.name} chases after the laser pointer.`; }
}

export default Cat;