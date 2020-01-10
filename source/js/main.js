document.addEventListener('DOMContentLoaded', function(){
	var menu = $('.top-menu a');
	menu.mouseover(function() {
    	$(this).next().css("display", "block");
  	}).mouseout(function() {
    	$(this).next().css("display", "none");
  	});
});