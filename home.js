var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    speed:2000,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });