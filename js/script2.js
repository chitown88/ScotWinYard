

window.addEventListener('load', function(){
new Glider(document.querySelector('.glider'), {
  slidesToShow: 5,
  slidesToScroll: 1,
  rewind: true,
  draggable: true,
  dots: '.dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
})
});