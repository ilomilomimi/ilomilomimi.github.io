document.addEventListener("DOMContentLoaded", function(event) {

    // Fix header on scroll
    let element = document.getElementById('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            element.classList.add("header--fixed");
        } else {
            element.classList.remove("header--fixed");
        }
    });


    // Animation on scroll
    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }


});
