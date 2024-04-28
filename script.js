/* Setup and start animation! */
 
var typed = new Typed('#element', {
    strings: ['', 'a Web Developer'],
    typeSpeed: 100,
});

/* */

document.querySelectorAll('.progress').forEach(bar => {
    bar.addEventListener('mouseenter', function() {
        this.querySelector('.progress-bar').style.width = "100%";
    });
});
