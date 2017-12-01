import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';

import Typed from 'typed.js';
import $ from 'jquery';
import 'jquery-validation';

// Type & erase text effect
const typedOptions = {
  strings: ['I\'m a ^1 programmar', 'I\'m a ^1 programmor', 'I\'m a ^1 programer', '^1000I write code.'],
  backDelay: 1500,
  typeSpeed: 60,
  backSpeed: 50,
  cursorChar: '',
  onComplete: () => {
    $('.v-landing-btn').fadeTo('slow', 1);
  }
}

const typed = new Typed(".v-landing-text-typed", typedOptions);


// Smooth scroll

// jQuery Easing
//  * Copyright 2008 George McGinley Smith
//  * All rights reserved.
$.easing.easeInOutExpo = function (x, t, b, c, d) {
  if (t == 0) return b;
  if (t == d) return b + c;
  if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
  return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
}

const $scroll = $('.v-landing-btn, .v-landing-more, .v-about-work');
const $root = $('html, body');

$scroll.click(function (event) {
  const href = $(this.hash);
  event.preventDefault();

  $root.animate({ scrollTop: href.offset().top },
    {
      duration: 1000,
      easing: 'easeInOutExpo'
    }
  );
});


// override jquery validate plugin defaults
$('.v-contact-form').validate({
  errorClass: 'form-text',
  errorElement: 'span',
  submitHandler: function (form) {
    $.ajax({
      url: '//formspree.io/vkhotimchenko@gmail.com',
      method: 'POST',
      data: {
        name: $(form).find('input[name=\'sender-name\']').val(),
        _replyto: $(form).find('input[name=\'_replyto\']').val(),
        message: $(form).find('textarea[name=\'message\']').val()
      },
      dataType: 'json',
      success: function () {
        $('.v-contact-form').fadeOut();
        $('.v-footer-header').text('Message sent!');
        $('.v-footer-sub').text('I\'ll respond within 24 hours.');
      },
      error: function () {
        $('.submit-errors').removeClass('d-none');
      }
    });
  }
});