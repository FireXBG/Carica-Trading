(function () {
	window.onpageshow = function(event) {
		if (event.persisted) {
			window.location.reload();
		}
	};
})();

window.addEventListener("load", remove());

function remove() {
    var loader = document.querySelector(".loader");
    setTimeout(() => {
        loader.style.opacity = "0%"
    }, 3000);
    setTimeout(() => {
        loader.style.display = "none";
    }, 4000);

    /*
    var loaderStyle = loader.style.display;
    if (loaderStyle =! "none") {
        document.location.reload();
    }

    */
}

