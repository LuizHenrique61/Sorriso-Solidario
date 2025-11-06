// Menu Mobile Toggle

document.addEventListener("DOMContentLoaded", () => {
    const toggleMenu = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav ul");

    if (!toggleMenu || !menu) return;

    toggleMenu.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
});

// ===== Alternância de Temas =====
const body = document.body;
const lightBtn = document.getElementById("lightModeBtn");
const darkBtn = document.getElementById("darkModeBtn");
const contrastBtn = document.getElementById("contrastModeBtn");

function applyTheme(theme) {
  body.classList.remove("dark-mode", "contrast-mode");

  if (theme === "dark") body.classList.add("dark-mode");
  if (theme === "contrast") body.classList.add("contrast-mode");

  localStorage.setItem("theme", theme);
}

lightBtn.addEventListener("click", () => applyTheme("light"));
darkBtn.addEventListener("click", () => applyTheme("dark"));
contrastBtn.addEventListener("click", () => applyTheme("contrast"));

applyTheme(localStorage.getItem("theme") || "light");
