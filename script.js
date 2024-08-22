let navItem = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse");

navItem.forEach((a) => {
  a.addEventListener("click", () => {
    navCollapse.classList.remove("show");
  });
});

let nav = document.querySelector(".navbar");
window.onscroll = () => {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("navbar-scrolled");
  } else {
    nav.classList.remove("navbar-scrolled");
  }
};

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  breakpoints: {
    600: {
      slidesPerView: 1, 
    },
    768: {
      slidesPerView: 2, 
    },
    992: {
      slidesPerView: 3, 
    },
  },

  autoplay: {
    delay: 2000, 
    disableOnInteraction: false,  
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// let scrollContainer = document.querySelector(".scroll-container");
// let leftBtn = document.querySelector(".left-button");
// let rightBtn = document.querySelector(".right-button");

// leftBtn.addEventListener("click", () => {
//   scrollContainer.scrollBy({
//     left: -400,
//     behavior: "smooth",
//   });
// });

// rightBtn.addEventListener("click", () => {
//   scrollContainer.scrollBy({
//     left: 400,
//     behavior: "smooth",
//   });
// });
