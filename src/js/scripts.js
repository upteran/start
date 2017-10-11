$(document).ready(function () {
	$("a.zoom").fancybox();
	$("#phone").mask("+7(999) 999-9999");
	$(".phone").mask("+7(999) 999-9999");

	// Tabs
	$('.tabs__caption li').on('click', function(){
		var tab_id = $(this).attr('data-tab');

		$(this).siblings('li').removeClass('active');
		$(this).closest('.tabs').find("#"+tab_id)
								.addClass('active')
								.siblings('.tab__content')
								.removeClass('active');
		$(this).addClass('active');
	})
})