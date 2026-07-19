// theme switcher
const toggle = document.getElementById("theme-toggle");

function setTheme(theme) {
    document.body.classList.toggle("light", theme === "light");

    toggle.innerHTML =
        theme === "light"
            ? "<span>dark</span>/light"
            : "dark/<span>light</span>";

    localStorage.setItem("theme", theme);
}

setTheme(localStorage.getItem("theme") || "dark");

toggle.addEventListener("click", () => {
    setTheme(
        document.body.classList.contains("light")
            ? "dark"
            : "light"
    );
});


// type effect
window.addEventListener("DOMContentLoaded", () => {

    const title = document.querySelector(".terminal-title");
    const text = title.dataset.title;

    const typing = document.getElementById("typing");
    const cursor = document.getElementById("cursor");

    let i = 0;

    function type() {
        if (i < text.length) {
            typing.textContent += text.charAt(i);
            i++;
            setTimeout(type, 500);
        } else {
            cursor.textContent = "_";
        }
    }

    type();

});


// stop reload samepae
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        if (this.pathname === window.location.pathname) {
            e.preventDefault();
        }
    });
});