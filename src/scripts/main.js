
const collectionSwiper = new Swiper('.collection__wrapper', {
  slidesPerView: 1,
  autoHeight: true,
  spaceBetween: 50,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 2,
    },
    1920: {
      slidesPerView: 3,
    },
  },
});

const newArrivalsSwiper = new Swiper('.new-arrivals__content', {
  slidesPerView: 1,
  autoHeight: true,
  spaceBetween: 23,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});
