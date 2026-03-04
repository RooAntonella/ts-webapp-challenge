export function footerComponent() {
    const footer = document.createElement("footer");
    footer.style.borderTop = "1px solid #ccc";
    footer.style.padding = "10px";
    footer.style.marginTop = "20px";
    footer.textContent = "© 2026 Mi WebApp";
    return footer;
}
