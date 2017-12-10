import Typed from 'typed.js/lib/typed.min';
import SmoothScroll from 'smooth-scroll';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';

// Typing effect
const typedOptions = {
  strings: ['I\'m a ^1 programmar', 'I\'m a ^1 programmor', 'I\'m a ^1 programer', '^1000I write code.'],
  backDelay: 1500,
  typeSpeed: 60,
  backSpeed: 50,
  cursorChar: '',
  onComplete: () => {
    const landBtnCss = document.querySelector('.v-landing-btn').classList;
    landBtnCss.add('v-opacity-anim-1s');
    landBtnCss.remove('v-opacity-0');
  },
};

/* eslint-disable no-unused-vars */
// Libraries require object instantiation to work
const typed = new Typed('.v-landing-text-typed', typedOptions);
const scroll = new SmoothScroll('a[href*="#"]'); // Smooth scroll
/* eslint-disable no-unused-vars */

function makeRequest(e) {
  e.preventDefault();
  const errorNoteCss = document.querySelector('.v-form-error').classList;

  const form = document.forms[0];
  if (form.checkValidity()) {
    if (errorNoteCss.contains('v-opacity-anim-1s') === true) {
      errorNoteCss.add('v-opacity-0');
      setTimeout(() => {
        errorNoteCss.add('v-wh-0');
      }, 1111);
    }

    const request = new XMLHttpRequest();
    const formData = new FormData(form);
    request.open('POST', 'https://formspree.io/vkhotimchenko@gmail.com');
    request.setRequestHeader('accept', 'application/json');
    request.send(formData);

    request.onreadystatechange = () => {
      if (request.status === 200) {
        form.classList.add('d-none');
        document.querySelector('.v-footer-header').textContent = 'Message sent!';
        document.querySelector('.v-footer-sub').textContent = 'I\'ll respond within 24 hours.';
      } else {
        errorNoteCss.remove('v-wh-0');
        errorNoteCss.remove('v-opacity-0');
        errorNoteCss.add('v-opacity-anim-1s');
      }
    };
  } else {
    form.querySelectorAll(['*:required']).forEach((el) => {
      if (el.checkValidity()) {
        if (el.classList.contains('is-invalid')) el.classList.remove('is-invalid');
        el.classList.add('is-valid');
      } else {
        el.classList.add('is-invalid');
      }
    });
  }
}

document.querySelector('.v-form-submit-btn').addEventListener('click', makeRequest);
