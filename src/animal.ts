class Animal {
  name: string;
}
interface AnimalConstructor {
  new (name: string): any;
}

interface AnimalInterface {
  pet(): void;
  feed(): void;
  play(): void;
}

export { Animal, AnimalConstructor, AnimalInterface };