/* Setup and start animation! */
 
var typed = new Typed('#element', {
    strings: ['', 'a Web Developer'],
    typeSpeed: 100,
});

/* */

document.querySelectorAll('.progress-bar').forEach(bar => {
    bar.addEventListener('mouseenter', function() {
        this.style.width = '100%';
    });

    // bar.addEventListener('mouseleave', function() {
    //     this.style.width = "0%";
    // });
});
