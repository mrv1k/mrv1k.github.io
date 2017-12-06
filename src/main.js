import Typed from 'typed.js';
import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';

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

// eslint-disable-next-line no-unused-vars
const typed = new Typed('.v-landing-text-typed', typedOptions); // that's how library works


// Smooth scroll

/* eslint-disable */
// jQuery Easing
//  * Copyright 2008 George McGinley Smith
//  * All rights reserved.
$.easing.easeInOutExpo = function (x, t, b, c, d) {
  if (t == 0) return b;
  if (t == d) return b + c;
  if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
  return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
}
/* eslint-enable */

const $scroll = $('.v-landing-btn, .v-landing-more, .v-about-work');
const $root = $('html, body');

function scrollTo(event) {
  const href = $(this.hash);
  event.preventDefault();

  $root.animate({ scrollTop: href.offset().top }, {
    duration: 1000,
    easing: 'easeInOutExpo',
  });
}

$scroll.click(scrollTo);


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
