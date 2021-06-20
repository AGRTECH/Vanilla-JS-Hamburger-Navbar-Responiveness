const hamburger = document.querySelector('.fa-bars');
const navbar = document.querySelector('.navbartwo');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('navbar-toggle');
  navbar.classList.toggle('show-navbar');
})