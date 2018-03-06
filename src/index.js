import Greeter from './greeter';

const body = document.getElementsByTagName('body')[0];
const greeter = new Greeter('Scott');

body.appendChild(greeter.render());