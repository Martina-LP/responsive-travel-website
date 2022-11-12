const menuToggleIcon = document.getElementById("menu-toggle-icon");
const navMobile = document.getElementById("nav");
const headerEl = document.getElementById("header");
const navLinks = document.querySelectorAll(".nav-mobile .list-link");
// Toggle nav
const toggleMenu = () => {
  navMobile.classList.toggle("active");
  headerEl.classList.toggle("active");
}

menuToggleIcon.addEventListener('click', toggleMenu);
// Add/remove header border-bottom on scroll
const headerScrollEvent = () => {
  if (this.scrollY >= 30) {
    headerEl.classList.add('active-scroll');
  } else {
    headerEl.classList.remove('active-scroll');
  }
}

window.addEventListener('scroll', headerScrollEvent);
// Add selected styles to the link clicked and close nav when clicking the links
navLinks.forEach(link => link.addEventListener('click', () => {
  navMobile.classList.remove('active');
  headerEl.classList.remove('active');

  let current = document.getElementsByClassName('current');

  current[0].className = current[0].className.replace(' current', "");
  link.className += " current";
}));
// All the animations happening while scrolling
const sr = ScrollReveal({
  distance: '25px', // how far the element moves when revealed
  duration: 2500 // how long the animations are going to take to complete
});

sr.reveal(`.image-left, .popular-destinations-data, .plan-trip-data`, {
  origin: 'left' // specify the direction from where the elements will come from when revealed
});

sr.reveal('.image-center', {
  origin: 'bottom'
});

sr.reveal(`.image-right, .showcase-data`, {
  origin: 'right'
});

sr.reveal('.beach-data-wrapper', {
  origin: 'bottom',
  interval: 250 // time between each animation reveal
});

sr.reveal('.newsletter-container', {
  origin: 'top'
});

sr.reveal(`.footer-container-inner > div, .footer-separator, .copyright`, {
  origin: 'bottom',
  interval: 250
});
