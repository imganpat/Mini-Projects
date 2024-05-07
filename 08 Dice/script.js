const one = "images/dice1.png"
const two = "images/dice2.png"
const three = "images/dice3.png"
const four = "images/dice4.png"
const five = "images/dice5.png"
const six = "images/dice6.png"

const points = [one, two, three, four, five, six]

const roll = () => {
    let r = Math.floor(Math.random() * points.length) + 1;
    document.querySelector(".dice-face").style.animation = "spin 1s ease-in-out";
    setTimeout(() => {
        document.querySelector(".dice-face").src = points[r - 1];
        document.querySelector(".dice-face").style.animation = "";
        document.querySelector(".state").innerText = `Points : ${r}`;
    }, 1000);

}

document.querySelector(".dice").addEventListener("click", roll)