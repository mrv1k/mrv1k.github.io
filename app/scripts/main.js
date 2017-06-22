$('.navbar-toggler').collapse();
// override jquery validate plugin defaults

$('.contact-form').validate({
  errorClass: "help-block",
  errorElement: "span",
  highlight: function(element) {
    $(element).closest('.form-group').addClass('has-danger');
    $(element).closest('input').addClass('form-control-danger');
    $('.btn.btn-outline-success').removeClass('btn-outline-success').addClass('btn-outline-danger');
  },
  unhighlight: function(element) {
    $(element).closest('.form-group').removeClass('has-danger');
    $(element).closest('input').removeClass('form-control-danger');
  },
  success: function(element) {
    $(element).closest('.form-group').addClass('has-success');
    $(element).closest('input').addClass('form-control-success');
    $('.btn.btn-outline-danger').removeClass('btn-outline-danger').addClass('btn-outline-success');
  },
  submitHandler: function(form) {
    $.ajax({
      url: 'http://formspree.io/vkhotimchenko@gmail.com',
      method: 'POST',
      data: {
        name: $(form).find("input[name='name']").val(),
        _replyto: $(form).find("input[name='_replyto']").val(),
        message: $(form).find("textarea[name='message']").val()
      },
      dataType: 'json',
      success: function() {
        $("#submit-success").fadeIn();
        $("#contact-form").fadeOut();
      },
      error: function() {
        $("#submit-errors").fadeIn();
      }
    });
  }
});


const myNav = document.querySelector('.navbar');
window.onscroll = function() {
  if (document.body.scrollTop >= 68) {
    myNav.classList.add('nav-opaque');
  } else {
    myNav.classList.remove('nav-opaque');
  }
};
