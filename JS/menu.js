    var toggle;
    function menuHandle() {
        var menu = document.querySelector(".nav-links");
        menu.style.paddingTop = "1.5rem";
        menu.style.paddingBottom = "20rem";
        setTimeout(() => {
            menu.style.width = "10rem";
            menu.style.opacity = "1";
            menu.style.paddingLeft = "1rem";
        }, 300);
        
        setTimeout(() => {
            toggle = true;
            if(toggle = true) {
                var body = document.querySelector("body");
                body.addEventListener("click", () => {
                    menuClose();
                    toggle = false;
                });
            }
        }, 1000);
    }
    
    function menuClose() {
        var menu=document.querySelector(".nav-links");
        menu.style.width = "0";
        menu.style.paddingLeft = "0";
        
        setTimeout(() => {
            menu.style.opacity = "0";
        }, 150);
        toggle = false;
    }
    
    
    