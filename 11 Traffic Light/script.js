const lights = document.querySelectorAll(".lights");
let currentLightIndex = 0;  // Track the current light

function switchLights() {
    lights.forEach(light => light.classList.remove("glow"));
    lights[currentLightIndex].classList.add("glow");
    currentLightIndex = (currentLightIndex + 1) % lights.length;
}

setInterval(switchLights, 2000);  