$(document).ready(function(){
	var screenWidth = $(window).width();
	if(screenWidth >= 767) {
		$('aside.meta').prependTo($('#content'));
	}
})

$(function($) {
	$('#hamburger').click(function(event){
		$('nav').toggleClass("burgerd");
	})
var doit;
	$(window).resize(function(){
  clearTimeout(doit);
  doit = setTimeout(function(){
  		var screenWidth = $(window).width();
		if(screenWidth >= 768) {
	    	$('aside.meta').prependTo($('#content'));
		} else {
			$('aside.meta').appendTo($('#content'));
		}
  }, 400);
});

}(jQuery));

