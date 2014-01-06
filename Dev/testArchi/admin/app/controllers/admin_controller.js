load('application');

action('index', function () {
  render({
    title: "admin#index"
  });
});

action(function connection() {

	req.check('authenticity_token', 'Unable to perform the login method.').notEmpty();
    req.check('login', 'Please enter a valid login.').len(4,15).isAlpha();
    req.check('pass', 'Please enter a valid password.').len(6,15).isAlphanumeric();

    var errors = req.validationErrors(true);
    if (errors) {
		flash(errors.pass.param, errors.pass.msg);
		redirect('admin');
		return;
    }
    redirect('admin');
});