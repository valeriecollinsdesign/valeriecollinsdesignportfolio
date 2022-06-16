console.log("Hello friend! Glad you could stop by");



/*menu toggle*/
function menuToggle(x) {
	var x = document.getElementById('myNavtoggle');
	if (x.className === 'navtoggle') {
	  x.className += ' responsive';
	} else {
	  x.className = 'navtoggle';
	}

  }
$('#click_advance').click(function() {
	$('#display_advance').toggle('1000');
	$("i", this).toggleClass("fas fa-bars fas fa-x");
});

$('.nav-link').on('click', function() {
	$('.active-link').removeClass('active-link');
	$(this).addClass('active-link');
});/* jquery for the nav animation to work*/

/*back to top button*/
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
