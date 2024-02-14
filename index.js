// Sidebar selector of the nav
const sideBar = document.querySelector(".side-bar");

// Button selector for the sidebar button
const sidebarBtn = document.getElementById("side-bar-btn");

// Home content selector
const homeContent = document.querySelector(".home-content");

// Setting the number of clicks for the button
let numberOfClicks = 0;

// Setting the functionality of the button
sidebarBtn.addEventListener("click", () => {
    numberOfClicks = numberOfClicks + 1;

    if (numberOfClicks % 2 === 0 || numberOfClicks === 0) {
        sideBar.style.transform = "translateY(-280px)";
        homeContent.style.transform = "translateY(0px)";
    } else {
        sidebarBtn.style.alignSelf = "flex-start";
        sideBar.style.transform = "translateY(20px)";
        homeContent.style.transform = "translateY(100px)";
        homeContent.style.transition = ".6s all ease-in-out";
    }

})
