window.addEventListener("load", remove(), true);

function remove() {
    var loader = document.querySelector(".loader");
    setTimeout(() => {
        loader.style.opacity = "0%"
    }, 2000);
    setTimeout(() => {
        loader.style.display = "none";
    }, 4000);
}