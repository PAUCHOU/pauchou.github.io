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

$(document).ready(function() {
	$('.bmw-toggle').on('click', function() {
		$('.content').hide();
		$('.bmw').fadeIn();
	});
	$('.lexus-toggle').on('click', function() {
		$('.content').hide();
		$('.lexus').fadeIn();
	});
	$('.gtr-toggle').on('click', function() {
		$('.content').hide();
		$('.gtr').fadeIn();
	});
});