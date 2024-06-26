/* Setup and start animation! */
setTimeout(() => {
    var typed = new Typed('#element', {
        strings: ['', 'Web Developer'],
        typeSpeed: 50,
    });
    
}, 1000);

/* */ 

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

document.querySelectorAll('.progress').forEach(bar => {
    bar.addEventListener('mouseenter', function () {
        this.querySelector('.progress-bar').style.width = "100%";
    });
});


