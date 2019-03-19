export default function time () {
  let el = document.querySelector('#app');
  setInterval(() => {
    el.innerHTML = `TIME IS: ${new Date()}`;
  }, 1000);
}