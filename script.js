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

// copy btn
document.querySelectorAll(".copy-item").forEach(item => {

    const btn = item.querySelector(".copy-btn");

    btn.addEventListener("click", async (e) => {

        e.preventDefault();
        e.stopPropagation();

        await navigator.clipboard.writeText(item.dataset.copy);

        item.classList.add("copied");

        setTimeout(() => {
            item.classList.remove("copied");
        }, 1500);

    });

});


// projects terminal content switch 
const items = document.querySelectorAll(".item");
const title = document.getElementById("title");
const description = document.getElementById("description");
const stack = document.getElementById("stack");
const github = document.getElementById("github");
const demo = document.getElementById("demo");

let current = 0;

function updateItem(index) {

    items.forEach(item => item.classList.remove("active"));

    const item = items[index];

    item.classList.add("active");

    title.textContent = item.dataset.title;
    description.textContent = item.dataset.desc;
    stack.textContent = item.dataset.tech.replaceAll(",", " • ");
    github.href = item.dataset.github;
    demo.href = item.dataset.demo;

    // Keep the selected item visible
    item.scrollIntoView({
        block: "nearest",
        behavior: "smooth"
    });
}

items.forEach((item, index) => {

    item.addEventListener("click", () => {
        current = index;
        updateItem(current);
    });

});

document.addEventListener("keydown", (e) => {

    switch (e.key) {

        case "ArrowDown":
            e.preventDefault();
            current = (current + 1) % items.length;
            updateItem(current);
            break;

        case "ArrowUp":
            e.preventDefault();
            current = (current - 1 + items.length) % items.length;
            updateItem(current);
            break;

        case "Home":
            e.preventDefault();
            current = 0;
            updateItem(current);
            break;

        case "End":
            e.preventDefault();
            current = items.length - 1;
            updateItem(current);
            break;

        case "Enter":
            e.preventDefault();
            if (github.href !== "#") {
                window.open(github.href, "_blank");
            }
            break;

    }

});

updateItem(current);

// poject scroll
const sidebar = document.querySelector(".sidebar");

let wheelAccumulator = 0;

sidebar.addEventListener("wheel", (e) => {

    e.preventDefault();

    wheelAccumulator += e.deltaY;

    if (wheelAccumulator > 80) {
        current = (current + 1) % items.length;
        updateItem(current);
        wheelAccumulator = 0;
    }

    if (wheelAccumulator < -80) {
        current = (current - 1 + items.length) % items.length;
        updateItem(current);
        wheelAccumulator = 0;
    }

}, { passive: false });