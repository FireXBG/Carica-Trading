window.addEventListener("load", animate(), true);
function animate() {

    setTimeout(() => {
        setTimeout(() => {
            document.querySelector(".contacts-h1").style.opacity = "100%";
        }, 200);

        setTimeout(() => {
            document.querySelector(".contacts-left").style.opacity = "100%";
        }, 400);

        setTimeout(() => {
            document.querySelector(".contacts-left form input:first-child").style.opacity = "100%";
        }, 1000);

        setTimeout(() => {
            document.querySelector(".contacts-left form input:nth-child(2)").style.opacity = "100%";
        }, 1300);

        setTimeout(() => {
            document.querySelector(".contacts-left form input:nth-child(3)").style.opacity = "100%";
        }, 1600);

        setTimeout(() => {
            document.querySelector(".contacts-left form input:nth-child(4)").style.opacity = "100%";
        }, 1900);

        setTimeout(() => {
            document.querySelector(".contacts-left form textarea").style.opacity = "100%";
        }, 2200);

        setTimeout(() => {
            document.querySelector(".submit").style.opacity = "100%";
        }, 2500);

        setTimeout(() => {
            document.querySelector(".flex-top h1:nth-child(1)").style.opacity = "100%";
        }, 3000);

        setTimeout(() => {
            document.querySelector(".flex-top h1:nth-child(2)").style.opacity = "100%";
        }, 3200);

        setTimeout(() => {
            document.querySelector("#Person").style.opacity = "100%";
        }, 3400);

        setTimeout(() => {
            document.querySelector("#Box1").style.opacity = "100%";
        }, 3600);

        setTimeout(() => {
            document.querySelector("#Box2").style.opacity = "100%";
        }, 3800);

        setTimeout(() => {
            document.querySelector("#Box3").style.opacity = "100%";
        }, 4000);
    }, 3000);
}