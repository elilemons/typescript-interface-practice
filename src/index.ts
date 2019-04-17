import Cat from './cat';
import Puma from './puma';
import printMe from './print';
import './style.scss';

// Set up the HTML
const body: HTMLElement = document.body,
      container: HTMLElement = document.createElement('div'),
      results: HTMLElement = document.createElement('div');
container.classList.add('container');
results.id = 'results';
container.appendChild(results);
body.appendChild(container);

// App logic
let rudy = new Cat('Rudy');
printMe(rudy.play());
printMe(rudy.pet());
printMe(rudy.feed());

printMe('Puma extends Cat');

let pom = new Puma('Pom');
printMe(pom.play());
printMe(pom.pet());
printMe(pom.feed());
