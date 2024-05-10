document.getElementById("input").addEventListener("keyup", e => {
    e.preventDefault();

    let input = document.getElementById("input").value;

    if (input === "")
        return;

    const counter = document.querySelectorAll(".counter");
    Array.from(counter);

    const letterContainer = document.getElementById("letters-freq");
    const wordContainer = document.getElementById("words-freq");
    const sentenceContainer = document.getElementById("sentences-freq");
    let letters = 0;
    let words = 0;
    let sentence = 0;

    letters = input.replace(/\W/g, "").length;

    input = input.trim()
    words = input.split(/\s+/).length;

    sentence = input.match(/[.!?]+/g)?.length || 0;

    counter.forEach(element => {
        element.style.opacity = 1;
    });

    letterContainer.innerText = letters;
    wordContainer.innerText = words;
    sentenceContainer.innerText = sentence;

})
