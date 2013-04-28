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

(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);
$(document).ready(function(){
	var $allvidya = $("iframe[src^='http://www.youtube.com'], iframe[src^='http://player.vimeo.com']"),
		$contentarea = $(".post_actual");
		console.log('hey!')
	$allvidya.each(function() {
		$(this).data('aspect', this.height / this.width).removeAttr('height').removeAttr('width');
	});

	$(window).resize( $.debounce( 250, function() {
		var newWidth = $contentarea.width();
		$allvidya.each(function() {
			var $vidya = $(this);
			$vidya.width(newWidth).height(newWidth * $vidya.data('aspect'));
		});
	})).resize();
});

}(jQuery));

