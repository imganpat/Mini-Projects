const playAudio = (name) => {
    name = name.target.className.split(" ")[0];
    let sound;
    switch (name) {
        case 'tom-1':
            sound = new Audio("sounds/tom-1.mp3");
            break;
        case 'tom-2':
            sound = new Audio("sounds/tom-2.mp3");
            break;
        case 'tom-3':
            sound = new Audio("sounds/tom-3.mp3");
            break;
        case 'tom-4':
            sound = new Audio("sounds/tom-4.mp3");
            break;
        case 'kick-bass':
            sound = new Audio("sounds/kick-bass.mp3");
            break;
        case 'crash':
            sound = new Audio("sounds/crash.mp3");
            break;
        case 'snare':
            sound = new Audio("sounds/snare.mp3");
            break;
    }

    sound.play();
}

// const w = document.querySelector('.w').addEventListener('click', playAudio)
// const a = document.querySelector('.a').addEventListener('click', playAudio)
// const s = document.querySelector('.s').addEventListener('click', playAudio)
// const d = document.querySelector('.d').addEventListener('click', playAudio)
// const j = document.querySelector('.j').addEventListener('click', playAudio)
// const k = document.querySelector('.k').addEventListener('click', playAudio)
// const l = document.querySelector('.l').addEventListener('click', playAudio)

Array.from(document.querySelectorAll('.drum')).forEach((e) => {
    e.addEventListener('click', playAudio)
})