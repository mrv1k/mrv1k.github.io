$(document).ready(() => {
  // Type & erase text effect
  const typedOptions = {
    strings: ['I\'m a ^1 programmar', 'I\'m a ^1 programmor', 'I\'m a ^1 programer', '^1000I write code.'],
    backDelay: 1500,
    typeSpeed: 60,
    backSpeed: 50,
    cursorChar: '',
    onComplete: () => {
      console.log('what')
      $('.v-landing-btn').fadeTo('slow', 1);
    }
  }

  const typed = new Typed(".v-landing-text-typed", typedOptions);


  // override jquery validate plugin defaults
  $('.contact-form').validate({
    errorClass: 'help-block',
    errorElement: 'span',
    highlight: function (element) {
      $(element).closest('.form-group').addClass('has-danger');
      $(element).closest('input').addClass('form-control-danger');
      $('.btn.btn-outline-success').removeClass('btn-outline-success').addClass('btn-outline-danger');
    },
    unhighlight: function (element) {
      $(element).closest('.form-group').removeClass('has-danger');
      $(element).closest('input').removeClass('form-control-danger');
    },
    success: function (element) {
      $(element).closest('.form-group').addClass('has-success');
      $(element).closest('input').addClass('form-control-success');
      $('.btn.btn-outline-danger').removeClass('btn-outline-danger').addClass('btn-outline-success');
    },
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
          $('.contact-form').fadeOut();
          $('.footer .main-header').text('Message received!');
          $('.footer .sub-header').text('I\'ll respond ASAP.');
        },
        error: function () {
          $('.submit-errors').fadeIn();
        }
      });
    }
  });

});