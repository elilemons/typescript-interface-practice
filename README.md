# Typescript Challenge

## The challenge
Using interfaces, classes, and inheritance, show off some basic OOP.

Each corresponding step should have its own file.

This utlizes my own Webpack/Typescript starter pack.

## The steps
1. Create a class called animal
   - `name: string`
1. Create a constructor interface called `AnimalConstructor` that has one function
   1. `new(name: string): any`
2. Create an interface called `AnimalInterface` with the following methods (all with the type of string):
   - `pet()`
   - `play()`
   - `feed()`
3. Create a class called `Cat` that extends `Animal` and implements `AnimalInterface`
4. Create a class called `Puma` that extends `Cat`
5. Create several objects in `index.js` that play with the created items.
