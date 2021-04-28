let hamburger = document.querySelector('.hamburger-button');
let menu = document.querySelector('.dropdown-content');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');

});
