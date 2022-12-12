function menuHandle() {
    var menu = document.querySelector(".nav-links");
    menu.style.paddingLeft = "1rem";
    menu.style.paddingTop = "1.5rem";
    menu.style.paddingBottom = "20rem";
    setTimeout(() => {
        menu.style.width = "10rem";
        menu.style.opacity = "1";
    }, 300);
}

function menuClose() {
    var menu=document.querySelector(".nav-links");
    menu.style.width = "0";

    setTimeout(() => {
        menu.style.paddingLeft = "0";
        menu.style.paddingTop = "0";
        menu.style.paddingBottom = "0";
        menu.style.opacity = "0";
    }, 150);
}