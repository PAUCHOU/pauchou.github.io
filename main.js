$(document).ready(function() {
	$('.about-toggle').on('click', function() {
		$('.content').hide();
		$('.about').fadeIn();
	});
	$('.experience-toggle').on('click', function() {
		$('.content').hide();
		$('.experience').fadeIn();
	});
	$('.contact-toggle').on('click', function() {
		$('.content').hide();
		$('.contact').fadeIn();
	});
});