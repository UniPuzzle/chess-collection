const elem = document.querySelectorAll('.card-wrapp');
function insertName() {
  elem.forEach(function (elem) {
    elem.insertAdjacentHTML('afterbegin', `<p>${elem.dataset.name}</p>`);
  });
}

insertName();
