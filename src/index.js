import style from './styles/main.css';
import Greeter from './greeter';
import DataService from './data-service';

const body = document.getElementsByTagName('body')[0];
const greeter = new Greeter('Scott');

body.appendChild(greeter.render());

DataService.fetchData()
  .then(data => data.map(row => JSON.stringify(row)).join('\n'))
  .then(formatted => {
    const code = document.createElement('code');
    const pre = document.createElement('pre');
    code.innerHTML = formatted;
    pre.appendChild(code);
    body.appendChild(pre);
  });

