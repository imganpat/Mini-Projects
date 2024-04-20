const box = document.getElementById("box");

function animationStart() {
    box.style.animation = "animation 5s ease-in-out infinite alternate";
}

function animationStop() {
    box.style.animationPlayState = "paused";
}

function animationResume() {
    box.style.animationPlayState = "running";
}

function animationRestart() {
    box.style.removeProperty("animation");
    setTimeout(() => {
        animationStart();
    }, 1);
    animationResume()
}



