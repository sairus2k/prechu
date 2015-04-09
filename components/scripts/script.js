//unslider banner
$(function() {
	$('.banner').unslider({
		delay: 3000,
		fluid: true
	});
}); 


//unslider arrows
var unslider = $('.banner').unslider();
$('.unslider-arrow').click(function() {
	var fn = this.className.split(' ')[1];
	unslider.data('unslider')[fn]();
});