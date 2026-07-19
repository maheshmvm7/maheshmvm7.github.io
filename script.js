// window.addEventListener("DOMContentLoaded", () => {

//     const text = "about";
//     const typing = document.getElementById("typing");
//     const cursor = document.getElementById("cursor");

//     let i = 0;

//     function type() {
//         if (i < text.length) {
//             typing.textContent += text[i];
//             i++;
//             setTimeout(type, 700);
//         } else {
//             // Change cursor to !
//             cursor.textContent = "_";
//         }
//     }

//     type();

// });

const toggle = document.getElementById("theme-toggle");

function setTheme(theme){

    document.body.classList.toggle("light", theme === "light");

    if(theme === "light"){
        toggle.innerHTML = '<span>dark</span>/light';
    }else{
        toggle.innerHTML = 'dark/<span>light</span>';
    }

    localStorage.setItem("theme", theme);
}

const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

toggle.addEventListener("click", () => {

    const nextTheme =
        document.body.classList.contains("light")
            ? "dark"
            : "light";

    setTheme(nextTheme);

});

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
            setTimeout(type, 150);
        } else {
            cursor.textContent = "_";
        }
    }

    type();

});