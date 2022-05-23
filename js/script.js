console.log("Hello friend! Glad you could stop by");

$('.nav-link').on('click', function() {
	$('.active-link').removeClass('active-link');
	$(this).addClass('active-link');
});