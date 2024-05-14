const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const menu = document.querySelector(".nav-links");
const navbar = document.querySelector("nav");

function showMenu() {
    openBtn.addEventListener("click", () => {
        navbar.style.borderBottom = "1px solid #454545";
        menu.classList.add("menu-open");
        closeBtn.style.visibility = "visible";
        openBtn.style.visibility = "hidden";
    });
}
showMenu();

function hideMenu() {
    closeBtn.addEventListener("click", () => {
        menu.classList.remove("menu-open");
        closeBtn.style.visibility = "hidden";
        openBtn.style.visibility = "visible";
        navbar.style.borderBottom = "none";
    });
}
hideMenu();