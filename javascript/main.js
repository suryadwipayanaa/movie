// NAVBAR STYLING
$('.fa-bars').click(function(){
    $('nav .navbar .mid').toggleClass('aktif')
    $('.fa-bars').toggleClass('fa-xmark')
})

$('nav .navbar .list-items').click(function(){
    $('nav .navbar .mid').removeClass('aktif')
    $('.fa-bars').toggleClass('fa-xmark')
})
// NAVBAR STYLING


// navbar styling fixed and scroll
$(window).scroll(function(){
  const scroll = $(this).scrollTop()

  if(scroll > $('.benner h2').offset().top -40 ){
    $('nav').addClass('fixed')
  } else{
    $('nav').removeClass('fixed')
  }
})

// navbar styling fixed and scroll

const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    800: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    
    1000: {
        slidesPerView: 3,
        spaceBetween: 30
      }
  }
  
});

