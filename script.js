let navItem = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse")

navItem.forEach((a) => {
    a.addEventListener("click", () => {
        navCollapse.classList.remove("show");
    })
})

let nav = document.querySelector(".navbar");
window.onscroll = () => {
    if (document.documentElement.scrollTop > 20){
        nav.classList.add("navbar-scrolled")
    }
    else{
        nav.classList.remove("navbar-scrolled")
    }
}

let scrollContainer = document.querySelector('.scroll-container')
let leftBtn = document.querySelector('.left-button')
let rightBtn = document.querySelector('.right-button')

leftBtn.addEventListener("click", ()=>{
    scrollContainer.scrollBy({
        left:300,
        behavior:"smooth"
    })
})

leftBtn.addEventListener("click", ()=>{
    scrollContainer.scrollBy({
        left:-400,
        behavior:"smooth"
    })
})

rightBtn.addEventListener("click", ()=>{
    scrollContainer.scrollBy({
        left:400,
        behavior:"smooth"
    })
})




