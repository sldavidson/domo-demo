import styles from './styles/greeter.css';
export default class Greeter {
  constructor(name) {
    this.name = name || 'World';
    this.element = document.createElement('h1');
  }

  render() {
    this.element.innerHTML = `Hello, ${this.name}!`;
    return this.element;
  }
}