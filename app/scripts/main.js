$('.navbar-toggler').collapse();

const myNav = document.querySelector('.navbar');
window.onscroll = function() {
  if (document.body.scrollTop >= 68) {
    myNav.classList.add('nav-opaque');
  } else {
    myNav.classList.remove('nav-opaque');
  }
};
