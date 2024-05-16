const projectData = [
    {
        id: 1,
        name: "Animation Controller",
        image: "screenshots/01_animaton_controller.png",
        demo: "https://animation-controller.netlify.app",
        code: "https://github.com/imganpat/Mini-Projects/tree/main/01%20Animation%20Controler"
    },
    {
        id: 2,
        name: "Modern Shoe Card",
        image: "screenshots/02_shoe_card.png",
        demo: "https://modern-shoe-card.netlify.app",
        code: "https://github.com/imganpat/Mini-Projects/tree/main/02%20Modern%20Shoe%20Card"
    },
    {
        id: 3,
        name: "Drum Kit",
        image: "screenshots/03_drum.png",
        demo: "https://drum-band-kit.netlify.app",
        code: "https://github.com/imganpat/Mini-Projects/tree/main/03%20Drum"
    },
    {
        id: 4,
        name: "Toggle Theme Button",
        image: "screenshots/04_theme_toggle.png",
        demo: "https://toggle-theme-btn.netlify.app",
        code: "https://github.com/imganpat/Mini-Projects/tree/main/04%20Theme%20Toggle"
    },
    {
        id: 5,
        name: "Digital Clock",
        image: "screenshots/05_digital_clock.png",
        demo: "https://digital-clock-gc.netlify.app",
        code: "https://github.com/imganpat/Mini-Projects/tree/main/05%20Digital%20Clock"
    },
    {
        id: 6,
        name: "Form validation",
        image: "screenshots/06_form_validation.png",
        demo: "https://form-validation-gc.netlify.app",
        code: "https://github.com/imganpat/Mini-Projects/tree/main/06%20Form%20Validation"
    },
    {
        id: 7,
        name: "Profile Card",
        image: "screenshots/07_profile.png",
        demo: "https://profile-card-gc.netlify.app",
        code: "https://github.com/imganpat/Mini-Projects/tree/main/07%20Profile%20Card"
    },
    {
        id: 8,
        name: "Dice",
        image: "screenshots/08_dice.png",
        demo: "https://dice-gc.netlify.app",
        code: "https://github.com/imganpat/Mini-Projects/tree/main/08%20Dice"
    },
    {
        id: 9,
        name: "Palindrome Checker",
        image: "screenshots/09.png",
        demo: "https://palindrome-checker-gc.netlify.app",
        code: "https://github.com/imganpat/Mini-Projects/tree/main/09%20Palindrome%20Checker",
    },
    {
        id: 10,
        name: "Readibility Analyzer",
        image: "screenshots/10.png",
        demo: "https://readibility-analyzer.netlify.app/",
        code: "https://github.com/imganpat/Mini-Projects/tree/main/10%20Readibility%20Analyzer",
    },
    {
        id: 11,
        name: "Traffic Light",
        image: "screenshots/11.png",
        demo: "https://traffic-light-gc.netlify.app",
        code: "https://github.com/imganpat/Mini-Projects/tree/main/11%20Traffic%20Light",
    },
    {
        id: 12,
        name: "Animated Backgound",
        image: "screenshots/12.png",
        demo: "https://animated-background-gc.netlify.app",
        code: "https://github.com/imganpat/Mini-Projects/tree/main/12%20Animated%20Background",
    },
    {
        id: 13,
        name: "Sidebar UI",
        image: "screenshots/13.png",
        demo: "https://sidebar-gc.netlify.app",
        code: "https://github.com/imganpat/Mini-Projects/tree/main/13%20Sidebar",
    },
    {
        id: 14,
        name: "Responsive Navbar",
        image: "screenshots/14.png",
        demo: "https://navbar-gc.netlify.app",
        code: "https://github.com/imganpat/Mini-Projects/tree/main/14%20Navbar",
    },
    {
        id: 15,
        name: "Guess The Number",
        image: "screenshots/15.png",
        demo: "https://guess-the-number-gc.netlify.app",
        code: "https://github.com/imganpat/Mini-Projects/tree/main/15%20Guess%20The%20Number",
    },
];

const container = document.querySelector(".container");

projectData.forEach(project => {
    const card = document.createElement("a");

    card.innerText = project.name;
    card.setAttribute("href", project.demo)
    card.setAttribute("target", "_blank")

    card.innerHTML = `<div class = "project-card" title = "Preview">
                        <div class = "project-image">
                            <img src = ${project.image} />
                        </div>
                        <div class = "project-desc">
                            <div class = "project-name">${project.id + ". " + project.name}</div>
                            <div class ="project-code">
                                <a href = ${project.code} target = "_blank">
                                    <i class = "fa-brands fa-github" title = "Source Code"></i>
                                </a>
                            </div>
                        </div>
                    </div>`

    container.appendChild(card)

})


// animation

const projectCard = document.querySelectorAll(".project-card")

const animate = () => {
    const triggerBottom = window.innerHeight / 5 * 4
    projectCard.forEach(card => {
        const cardTop = card.getBoundingClientRect().top
        if (cardTop < triggerBottom)
            card.classList.add("show")
        else
            card.classList.remove("show")
    })
}

window.addEventListener("scroll", animate)
animate()

