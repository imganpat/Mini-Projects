let attempts = 20;
const number = Math.floor(Math.random() * 100 + 1)
let guide = document.querySelector(".info");
let remainingAttempts = document.getElementById("attempts");
const restartButton = document.getElementById("restart-btn");

const checkBtn = document.getElementById("check-btn")
checkBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const guessdNumber = document.getElementById("input-number");

    if (attempts === 0) {
        guide.classList.add("lose");
        guide.innerText = "Game Over";
        restartButton.classList.remove("hidden")
        checkBtn.classList.add("hidden")


        return
    }

    if (guessdNumber.value == number) {
        guide.classList.add("win");
        document.querySelector(".remaining").style.display = "none";
        guide.innerText = "You won";
        restartButton.classList.remove("hidden")
        checkBtn.classList.add("hidden")


        return;
    }
    else if (guessdNumber.value < number) {
        guide.innerText = "Too Low. Try Higher";
    }
    else if (guessdNumber.value > number) {
        guide.innerText = "Too High. Try Lower";
    }
    else
        guide.innerText = "";
    attempts--;
    remainingAttempts.innerText = attempts;

})

const restartGame = () => {
    attempts = 20;
    document.querySelector(".remaining").style.display = "block";
    guide.classList.remove("win", "lose");
    guide.innerText = "Here's your guide";
    document.getElementById("input-number").value = "";
    remainingAttempts.innerText = attempts;
    restartButton.classList.add("hidden")
    checkBtn.classList.remove("hidden")
}


restartButton.addEventListener("click", restartGame)
