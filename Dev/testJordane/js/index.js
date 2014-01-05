$(document).ready(function(){
	$('#button1').on('click', function() {
		$('p').css('background-color', 'red');
		$('input').addClass('error');

	});
	$('input').change(function() {
		
		console.log($(this).val());
	});
});