let btn_less = document.querySelector(".less");
let btn_more = document.querySelector(".more");
let amount = document.querySelector(".amount");
var num = 0;

btn_less.onclick = () => {
  if (num > 0){
    num--;
    amount.innerHTML = num;
  }
}

btn_more.onclick = () => {
  num++;
  amount.innerHTML = num;
}

document.addEventListener( 'DOMContentLoaded', function () {
  var main = new Splide( '#image-slider', {
    type      : 'fade',
    rewind    : true,
    pagination: false,
    arrows    : false,
  } );


  var thumbnails = new Splide( '#thumbnail-slider', {
    fixedWidth  : 100,
    fixedHeight : 60,
    gap         : 10,
    rewind      : true,
    pagination  : false,
    cover       : true,
    isNavigation: true,
    arrows    : false,
    focus      : 'center',
    breakpoints: {
      600: {
        fixedWidth : 60,
        fixedHeight: 44,
      },
    },
  } );

  main.sync( thumbnails );
  main.mount();
  thumbnails.mount();
} );