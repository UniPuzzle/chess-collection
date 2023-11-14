const elem = document.querySelectorAll('.itr_coin_wrap');
function insertName() {
  elem.forEach(function (elem) {
    elem.insertAdjacentHTML('afterbegin', `<p>${elem.dataset.name}</p>`);
  });
}

insertName();
