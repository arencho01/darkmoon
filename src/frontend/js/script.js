const swiper = new Swiper('.swiper', {
   loop: true,
   slidesPerView: 1,
   pagination: {
      el: '.swiper-pagination',
   },
   breakpoints: {
      500: {
         navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
         },
         slidesPerView: 3,
         spaceBetween: 67
      }
   }
});



// Менюшка
let body = document.body;
let html = document.documentElement;
let burgerMenuBtn = document.querySelector('.burger-menu');
let menu = document.querySelector('.menu');

burgerMenuBtn.addEventListener('click', function() {
   if (burgerMenuBtn.classList.contains('burger-menu--active')) {
      burgerMenuBtn.classList.remove('burger-menu--active');
      html.classList.remove('no-scroll');
      body.classList.remove('no-scroll');
      menu.classList.remove('menu--opened');
   }
   else {
      burgerMenuBtn.classList.add('burger-menu--active');
      html.classList.add('no-scroll');
      body.classList.add('no-scroll');
      menu.classList.add('menu--opened');
   }
});



// popup-ы
let btnPopup = document.querySelector('.btn__popup');
let popup = document.querySelector('.popup');
let popupCloseBtn = document.querySelector('.popup__close-btn');

btnPopup.addEventListener('click', function (e) {
   e.preventDefault();
   popup.classList.add('popup--opened');
   html.classList.add('no-scroll');
   body.classList.add('no-scroll');
})

popupCloseBtn.addEventListener('click', function(e) {
   e.preventDefault();
   popup.classList.remove('popup--opened');
   html.classList.remove('no-scroll');
   body.classList.remove('no-scroll');
})


// popup (нажать кнопку "заказать")
let popupBtnOrder = document.querySelector('.popup__btn-order');
let thanksPopup = document.querySelector('.thanks-popup');
let thanksPopupBtnClose = document.querySelector('.thanks-popup__btn-close');
let thanksPopupBtnOk = document.querySelector('.thanks-popup__btn');

popupBtnOrder.addEventListener('click', function(e) {
   e.preventDefault();
   popup.classList.remove('popup--opened');
   thanksPopup.classList.add('thanks-popup--opened');
});

thanksPopupBtnClose.addEventListener('click', function(e) {
   e.preventDefault();
   thanksPopup.classList.remove('thanks-popup--opened');
   html.classList.remove('no-scroll');
   body.classList.remove('no-scroll');
});

thanksPopupBtnOk.addEventListener('click', function(e) {
   e.preventDefault();
   thanksPopup.classList.remove('thanks-popup--opened');
   html.classList.remove('no-scroll');
   body.classList.remove('no-scroll');
});


let popupRequestBtn = document.querySelector('.big-picture__btn');
let popupRequest = document.querySelector('.popup-request');
let popupRequestCloseBtn = document.querySelector('.popup-request__close-btn');
let popupRequestBtnOrder = document.querySelector('.popup-request__btn-order');

popupRequestBtn.addEventListener('click', function(e) {
   e.preventDefault();
   popupRequest.classList.add('popup-request--opened');
   html.classList.add('no-scroll');
   body.classList.add('no-scroll');
})

popupRequestCloseBtn.addEventListener('click', function(e) {
   e.preventDefault();
   popupRequest.classList.remove('popup-request--opened');
   html.classList.remove('no-scroll');
   body.classList.remove('no-scroll');
})

popupRequestBtnOrder.addEventListener('click', function(e) {
   e.preventDefault();
   popupRequest.classList.remove('popup-request--opened');
   thanksPopup.classList.add('thanks-popup--opened');
})



let servicesItemBtns = document.querySelectorAll('.services__item-btn');
let popupServices = document.querySelector('.popup-services');
let popupServicesBtnOrder = document.querySelector('.popup-services__btn-order');
let popupServicesCloseBtn = document.querySelector('.popup-services__close-btn');

servicesItemBtns.forEach((el) => {
   el.addEventListener('click', function(e) {
      e.preventDefault();
      popupServices.classList.add('popup-services--opened');
      html.classList.add('no-scroll');
      body.classList.add('no-scroll');
   });
});

popupServicesCloseBtn.addEventListener('click', function(e) {
   e.preventDefault();
   popupServices.classList.remove('popup-services--opened');
   html.classList.remove('no-scroll');
   body.classList.remove('no-scroll');
});

popupServicesBtnOrder.addEventListener('click', function(e) {
   e.preventDefault();
   popupServices.classList.remove('popup-services--opened');
   thanksPopup.classList.add('thanks-popup--opened');
})