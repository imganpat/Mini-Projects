const app = document.querySelector('body');
const toggleBtn = document.getElementById('switch');
const themeName = document.querySelector('.theme-name')
toggleBtn.addEventListener('click', (e) => {
    app.classList.toggle('dark-theme')
    if (app.classList == "dark-theme")
        themeName.innerText = "Dark";
    else themeName.innerText = "Light";
});
