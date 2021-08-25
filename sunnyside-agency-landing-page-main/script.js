const menuToggle = document.querySelector(".menuToggle")
const navSections = document.querySelector(".navSections")

menuToggle.addEventListener("click", function () {
    navSections.classList.toggle("navToggle")
    menuToggle.classList.toggle("menuToggleFade")
});