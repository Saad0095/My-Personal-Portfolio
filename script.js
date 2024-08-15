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

let scrollContainer = document.querySelector(".scroll-container");
let scrollAmount = 0;
let scrollStep = 2;
let maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
let leftBtn = document.querySelector(".left-button");
let rightBtn = document.querySelector(".right-button");



let autoScrollInterval;

setTimeout(() => {
  autoScrollInterval = setInterval(autoScroll, 10);
}, 3000);

function autoScroll() {
  scrollAmount += scrollStep;
  scrollContainer.scrollLeft = scrollAmount;

  setTimeout(() => {
    if (scrollAmount >= maxScroll || scrollAmount <= 0) {
      scrollStep = -scrollStep;
    }
  }, 500);
}


leftBtn.addEventListener("click", () => {
  clearInterval(autoScrollInterval);

  scrollContainer.scrollBy({
    left: -400,
    behavior: "smooth",
  });
});

rightBtn.addEventListener("click", () => {
  clearInterval(autoScrollInterval);

  scrollContainer.scrollBy({
    left: 400,
    behavior: "smooth",
  });
});
