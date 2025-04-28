(function ($) {
  $.fn.simpleLogin = function () {
    const settings = $.extend({
      usernameField: '#li-username',
      passwordField: '#li-password',
      errorContainer: '#error-message',
      validUsername: 'admin',
      validPassword: 'test',
      redirectUrl: 'forum.html'
    });

    return this.each(function () {
      const $form = $(this);
      const $errorMessage = $(settings.errorContainer);

      $form.on('submit', function (e) {
        e.preventDefault();

        const username = $(settings.usernameField).val().trim();
        const password = $(settings.passwordField).val();

        // Clear previous error
        $errorMessage.text('');

        if (!username || !password) {
          $errorMessage.text('Please enter your username and password.');
          return;
        }

        if (username !== settings.validUsername || password !== settings.validPassword) {
          $errorMessage.text('Incorrect username or password.');
          return;
        }

        // Clear form
        $form[0].reset();

        // Redirect
        window.location.href = settings.redirectUrl;
      });
    });
  };
}(jQuery));


$(function () {
  $('#loginForm').simpleLogin();
});

  