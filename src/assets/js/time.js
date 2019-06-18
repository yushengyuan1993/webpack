export default function time () {
  let el = document.createElement('div');
  el.classList.add('time');
  setInterval(() => {
    el.innerHTML = `TIME IS: ${new Date()}`;
    document.querySelector('#app').appendChild(el);
  }, 1000);
}