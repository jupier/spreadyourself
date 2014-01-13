$(document).ready(function(){

	window.onload=onLoad();


	function onLoad()
	{
		$('#forgotUsernameTitle').hide();
		$('#forgotPasswordTitle').hide();
	};

	$('#forgotPassword').on('click', function() {

		$('#normalContent').hide();
		$('#forgotContent').show();
		$('#normalTitle').hide();
		$('#forgotPasswordTitle').show();

	});

	$('#forgotUsername').on('click', function() {
		$('#normalContent').hide();
		$('#forgotContent').show();
		$('#normalTitle').hide();
		$('#forgotUsernameTitle').show();
	
	});

	$('#returnToLogIn').on('click', function() {
		$('#normalContent').show();
		$('#forgotContent').hide();
		$('#normalTitle').show();
		$('#forgotPasswordTitle').hide();
		$('#forgotUsernameTitle').hide();
	});

/*
	$('#createAnAccount').on('click', function() {
		$('#');
	});
*/
	
});