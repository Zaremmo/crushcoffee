let menuIcon = document.querySelector(".nav-menu-btn");
let navList = document.querySelector(".nav-list");

menuIcon.addEventListener("click", function(){
    if (navList.style.display === "block") {
        navList.style.display = "none";
      } else {
        navList.style.display = "block";
        
      }
});

var swiper = new Swiper('.swiper-container', {
  spaceBetween: 50,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });