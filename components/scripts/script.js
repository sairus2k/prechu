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


//dropdown menu
var dropdown = function() {
  $(".dropdown img").click(function(){
    $(".dropdown-menu").toggle(100);
  });
};
 
$(document).ready(dropdown);