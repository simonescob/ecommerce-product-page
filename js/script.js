let btn_less = document.querySelector(".less");
let btn_more = document.querySelector(".more");
let amount = document.querySelector(".amount");
var num = 0;

let btn_cart = document.querySelector(".card");
let modal_cart = document.querySelector("#modal-card");

let card_products = document.querySelector("#card-products");
let product_amount = document.querySelector("#product-amount-cart");
let result = document.querySelector("#result");
let price = result.getAttribute("product-amount");

let content_empty = document.querySelector(".content-empty");
let product = document.querySelector(".modal-content .product");

btn_cart.onclick = () => {
  modal_cart.classList.toggle("hide");
}

btn_less.onclick = () => {
  if (num > 0){
    num--;
    amount.innerHTML = num;
    product_amount.innerHTML = num;
    result.innerHTML = "$" + num * parseFloat(price);
    card_products.innerHTML = num;
    card_products.classList.remove("hide");
  }
  
  if (num <= 0){
    content_empty.classList.remove("hide");
    product.classList.add("hide");
  }
}

btn_more.onclick = () => {
  num++;
  amount.innerHTML = num;
  if(num > 0){
    product_amount.innerHTML = num;
    result.innerHTML = "$" + num * parseFloat(price);
    card_products.innerHTML = num;
    card_products.classList.remove("hide");
    content_empty.classList.add("hide");
    product.classList.remove("hide");
  }
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