window.addEventListener("DOMContentLoaded", () => {

    const text = "about";
    const typing = document.getElementById("typing");
    const cursor = document.getElementById("cursor");

    let i = 0;

    function type() {
        if (i < text.length) {
            typing.textContent += text[i];
            i++;
            setTimeout(type, 700);
        } else {
            // Change cursor to !
            cursor.textContent = "_";
        }
    }

    type();

});