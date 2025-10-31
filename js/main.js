// Sistema de SPA (Single Page Application)

// Carrega o conteúdo da página correta
function loadPage(page) {
    const content = document.getElementById("content");
    content.innerHTML = templates[page] || "<h2>Página não encontrada</h2>";

    // Se a página for a de voluntário → ativar validações
    if (page === "volunteer") {
        setupValidation();
    }

    // Fechar menu mobile ao navegar
    document.querySelector("nav ul")?.classList.remove("active");
}

// Clique nas opções do menu
document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-page]");
    if (!btn) return;

    e.preventDefault();
    const page = btn.getAttribute("data-page");
    loadPage(page);
});

// Carregar Home ao iniciar
document.addEventListener("DOMContentLoaded", () => {
    loadPage("home");
});
