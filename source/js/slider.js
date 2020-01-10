document.addEventListener('DOMContentLoaded', function(){
	var ul = document.getElementById('pics');
	var pics = $('#pics').width();
	var left = 0;
	function Slider(){
		left = left - pics;
		if (left < - pics) {
			left = 0;
		}
		ul.style.left = left + 'px';
	}
	$('.img1, .img2').css("width", pics);
	var timer = setInterval(Slider, 5000);
	ul.onmouseover = function(){
		clearInterval(timer);
	}
});