(function($) {
	// scrollBottom
	function scrollBottom() { 
		return $(this).scrollTop() + $(this).height();
	};

	// hide/show float_btn
	function hideFloatBtn() {
		var sb = scrollBottom(),
			btn = $('.float-btn'),
			pos = $('#form').offset().top;

		if(sb >= pos) {
			btn.fadeOut();
		} else {
			btn.fadeIn();
		}
	}

	// window load
	$(window).load(function() {
		hideFloatBtn();
	});

	// window resize
	$(window).resize(function() {
		hideFloatBtn();
	});

	// window scroll
	$(window).scroll(function() {
		hideFloatBtn();
	});

	// anchor link
	$('.btn').click(function(e) {
		e.preventDefault();
		var form = $('#form').offset().top - $('.countdown').outerHeight();
		$('html, body').animate({ scrollTop: form }, 500);
	});
})(jQuery);