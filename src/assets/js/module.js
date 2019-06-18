import data from '../../../static/json/data.json';
import module from '../css/module.css';

export default () => {
  let el = document.createElement('div');
  el.classList.add(module.app);
  el.textContent = data.text;
  document.querySelector('#app').appendChild(el);
}
