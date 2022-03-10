/*HEADER ADD CLASS============================*/
function headerFix(){
   window.onscroll = function() {
      let scrollBody = document.querySelector('header');
      if (window.pageYOffset > 0) {
         scrollBody.classList.add('fix');
      } else {
         scrollBody.classList.remove('fix');
      }
   };   
} 
headerFix();

/*TOGGLE===================================*/
$(document).ready(function () {
   $('.faqItem__title').on('click', function () {
      $(this).toggleClass('active');
      $(this).parent('.faqItem').find('.faqItem__text').slideToggle();
   });
});

/*FANCY-BOX==============================*/
$(document).ready(function () {
   $('.fancy').fancybox({});
});


/*MASKA================================*/
$(document).ready(function () {
   $(function () {
      $(".phone").mask("+7 (999) 999-9999");
   });
   $.fn.setCursorPosition = function (pos) {
      if ($(this).get(0).setSelectionRange) {
         $(this).get(0).setSelectionRange(pos, pos);
      } else if ($(this).get(0).createTextRange) {
         var range = $(this).get(0).createTextRange();
         range.collapse(true);
         range.moveEnd('character', pos);
         range.moveStart('character', pos);
         range.select();
      }
   };
   $('input[type="tel"]').click(function () {
      $(this).setCursorPosition(3);  
   });
});

/* SLIDER==============================*/
$(document).ready(function () {
   $('#banner').slick({
      arrows: false,
      dots: false,
      adaptiveHeight: true,
      slidesToShow: 1,
      speed: 1000,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true, 
      swipeToSlide: true,
   });  
   $('.categories-slider').slick({
      arrows: true,
      dots: false,
      adaptiveHeight: true,
      slidesToShow: 5,
      speed: 1000,
      slidesToScroll: 1,
      infinite: true,
      autoplay: false, 
      swipeToSlide: true,
   });  
});

