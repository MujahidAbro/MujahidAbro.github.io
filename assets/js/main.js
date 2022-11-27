$(document).ready(function(){
var swiper = new Swiper(".slido", {
    slidesPerView: 1,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      200: {
        slidesPerView: 3,
        },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
    },
});

var swiper = new Swiper(".slido2", {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true,
  pagination: {
    el: ".swiper2-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    200: {
      slidesPerView: 3,
      spaceBetween: 5,
      },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

var swiper = new Swiper(".slido3", {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true,
  loop: true,
  pagination: {
    el: ".swiper2-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    200: {
      slidesPerView: 2,
      centeredSlides: true,
      },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".slido4", {
  slidesPerView: 1,
  spaceBetween: 10,
  // allowTouchMove:false,
  allowTouchMove: true,
  // loop: true,
  pagination: {
    el: ".swiper2-pagination",
    clickable: true,
    loop: true,
    dynamicBullets: true,
  },
  breakpoints: {
    200: {
      slidesPerView: 'auto',
      },
    600: {
      slidesPerView: 'auto',
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

$('.poper').click(function(){
  var trgt =  $(this).data('id');
  $(trgt).toggle();
  
  // taber
  var refTab =  $(this).data('tabi');
  $('.taber').removeClass('active');
  $(refTab).addClass('active');
  // taber close

  // tab
  var trgtTab =  $(this).data('ref');
  $('.menu-tabs').removeClass('show-tab');
  $(trgtTab).addClass('show-tab');
  // tab close

  if($(trgt).is( ":visible" )){
    $('body').css({'overflow':'hidden'});
  }else{
    $('body').css({'overflow':'auto'});
  }
});

$('.taber').click(function(e){
  e.preventDefault();
  $('.taber').removeClass('active');
  $(this).addClass('active');
  $('.menu-tabs').removeClass('show-tab');
  var targt = $(this).data('id');
  $(targt).addClass('show-tab');
})


// custom swiper
const element = document.querySelectorAll(".xscroll");
let isDown = false;
let startX;
let scrollLeft;

element.forEach(function(ele,i){

    ele.addEventListener('wheel', (x) => {
        x.preventDefault();
        element[i].scrollBy({
        left: event.deltaY < 0 ? -30 : 30,
        });
    });

    ele.addEventListener('mousedown', (e) => {
        isDown = true;
        element[i].classList.add('grabi');
        startX = e.pageX - element[i].offsetLeft;
        scrollLeft = element[i].scrollLeft;
    });

    ele.addEventListener('mouseleave', () => {
        isDown = false;
        element[i].classList.remove('grabi');
    });

    ele.addEventListener('mouseup', () => {
        isDown = false;
        element[i].classList.remove('grabi');
    });

    ele.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - element[i].offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        element[i].scrollLeft = scrollLeft - walk;
        console.log(walk);
    });

});


});