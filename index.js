const elem = document.querySelectorAll('.card-wrapp');
function insertName() {
  elem.forEach(function (elem) {
    elem.insertAdjacentHTML('afterbegin', `<p>${elem.dataset.name}</p>`);
  });
}

insertName();
document.addEventListener('click', e => {
  const svg = e.target;
  const index = [...svg.children];
  for (let i = 0; i < index.length; i++) {
    const element = index[i];

    element.style.fill = 'red';
    console.log(element);
  }
});
