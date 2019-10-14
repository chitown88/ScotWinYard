


$(document).ready(function() {
var div_ele = document.querySelectorAll('.glider');

new Glider(div_ele[1], {
		  slidesToShow: 5,
		  slidesToScroll: 1,
		  rewind: true,
		  draggable: true,
		  dots: '.dots',
		  arrows: {
	      prev: '.glider-prev',
		  next: '.glider-next'
		  }
	
});
});















