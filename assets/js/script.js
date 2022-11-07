// alert('Tes');

let btn = document.getElementById('myBtn');

if (btn !== null) {
  btn.addEventListener('click', function () {
    const land = document.querySelector('#landing');
    let nav = document.getElementById('navbar');

    nav.classList.toggle('show');
    land.classList.toggle('mt-land');
  });
}
