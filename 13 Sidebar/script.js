const hamBtn = document.getElementById("ham-btn");
const sidebar = document.querySelector(".sidebar");

function toogleBtn() {
    hamBtn.classList.toggle("fa-bars");
    hamBtn.classList.toggle("fa-close");
}

hamBtn.addEventListener("click", (e) => {
    e.preventDefault();
    sidebar.classList.toggle("width")
    toogleBtn();
});