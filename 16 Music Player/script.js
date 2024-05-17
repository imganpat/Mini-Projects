const song1 = new Audio("./songs/Royalty.mp3");
const song2 = new Audio("./songs/Dreamer.mp3");
const song3 = new Audio("./songs/Mortals.mp3");
const song4 = new Audio("./songs/On.mp3");
const song5 = new Audio("./songs/Superhero.mp3");
// const songs = [song1, song2, song3, song4, song5];

const songs = [
    {
        id: 1,
        title: "Royalty",
        thumbnail: "./images/royalty.jpg",
        song: song1
    },
    {
        id: 2,
        title: "Dreamer",
        thumbnail: "./images/dreamer.jpg",
        song: song2
    },
    {
        id: 3,
        title: "Mortals",
        thumbnail: "./images/mortals.jpg",
        song: song3
    },
    {
        id: 4,
        title: "On & On",
        thumbnail: "./images/on.jpg",
        song: song4
    },
    {
        id: 5,
        title: "Superhero",
        thumbnail: "./images/guitar.jpg",
        song: song5
    },
]

let i = 0;
let currentSong = songs[i];

const pauseSong = (song) => {
    if (!song.paused) {
        song.pause();
        document.getElementById("play-btn").classList.remove("fa-pause");
        document.getElementById("play-btn").classList.add("fa-play");
        document.querySelector(".song-image").style.animationPlayState = "paused";
    }
}

const resumeSong = (song) => {
    if (song.paused) {
        song.play();
        document.getElementById("play-btn").classList.remove("fa-play");
        document.getElementById("play-btn").classList.add("fa-pause");
        document.querySelector(".song-image").style.animationPlayState = "running";
        currentSong.song.addEventListener("timeupdate", updateProgressBar);
    }
}

const prevSong = () => {
    if (i > 0) {
        pauseSong(currentSong.song);
        currentSong.song.currentTime = 0;
        currentSong = songs[--i];
        resumeSong(currentSong.song);
        updateSongDetails();
    }
}

const nextSong = () => {
    if (i < songs.length - 1) {
        pauseSong(currentSong.song);
        currentSong.song.currentTime = 0;
        currentSong = songs[++i];
        resumeSong(currentSong.song);
        updateSongDetails();
    }
}

const updateSongDetails = () => {
    document.querySelector(".song-image").src = currentSong.thumbnail;
    document.querySelector(".song-name").innerText = currentSong.title;
}

const convertSeconds = sec => {
    let minutes = Math.floor(sec / 60);
    let seconds = Math.floor(sec % 60);
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    return minutes + ":" + seconds;
}

const updateProgressBar = () => {
    document.querySelector(".cursor").style.left = `${currentSong.song.currentTime / currentSong.song.duration * 100}%`;
    document.querySelector(".current-duration").innerText = convertSeconds(currentSong.song.currentTime);
    if (currentSong.song.currentTime == currentSong.song.duration)
        nextSong();
    document.querySelector(".total").innerText = convertSeconds(currentSong.song.duration);
}

document.getElementById("play-btn").addEventListener("click", () => {
    if (!currentSong.song.paused)
        pauseSong(currentSong.song);
    else
        resumeSong(currentSong.song);
});

document.getElementById("next-btn").addEventListener("click", nextSong);
document.getElementById("prev-btn").addEventListener("click", prevSong);
