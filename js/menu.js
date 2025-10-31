// Menu Mobile Toggle

document.addEventListener("DOMContentLoaded", () => {
    const toggleMenu = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav ul");

    if (!toggleMenu || !menu) return;

    toggleMenu.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
});
