
/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
    // adds blur header when viewport is greater than 50
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.screenY >= 350 ? scrollUp.classList.add('show-scroll') 
    : scrollUp.remove('show-roll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SHOW OVERLAY ===============*/
document.addEventListener("DOMContentLoaded", function() {

    const viewButton = document.querySelector(".view-button");

    viewButton.addEventListener("click", function() {
        // view is a class for overlay
        overlay.style.display = "flex";
    });

});
