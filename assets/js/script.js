// alert('Tes');

let btn = document.getElementById('myBtn');

if (btn !== null) {
  btn.addEventListener('click', function () {
    const land = document.querySelector('.content');
    let nav = document.getElementById('navbar');

    const bar = document.querySelector('.fa');

    nav.classList.toggle('show');
    land.classList.toggle('mt-land');
    bar.classList.toggle('fa-times');
  });
}

$(window).load(function() { $("#loading").delay(1000).fadeOut("slow"); } )
