// Sidebar selector of the nav
//const sideBar = document.querySelector(".side-bar");
const sideBar = document.querySelector(".side-bar");

// Button selector for the sidebar button
const sidebarBtn = document.getElementById("side-bar-btn");

// Home content selector
const homeContent = document.querySelector(".home-content");

// Setting the number of clicks for the button
let numberOfClicks = 0;

// Setting the functionality of the button
sidebarBtn.addEventListener("click", () => {
    numberOfClicks++;

    if (numberOfClicks > 0 && numberOfClicks % 2 === 1) {
        sideBar.style.transition = ".6s all ease-in-out";
        homeContent.style.display = "none";
        sideBar.style.display = "block";
        sideBar.style.transform = "translateY(0px)";
        console.log(numberOfClicks);
    } else {
        homeContent.style.display = "flex";
        homeContent.style.transition = "2s all ease-in-out";
        sideBar.style.display = "none";
    }
})


document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const offsetTop = targetSection.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            sideBar.style.display = "none";
            homeContent.style.display = "flex";
        }
    }
});