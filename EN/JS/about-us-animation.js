window.addEventListener("load", animate(), true);

function animate() {

    
    
    setTimeout(() => {
        setTimeout(() => {
            document.querySelector(".about-us-h1").style.opacity = "100%";
        }, 100);

        setTimeout(() => {
            document.querySelector(".left-1 h1").style.opacity = "100%";
        }, 200);
        
        setTimeout(() => {
            document.querySelector(".left-1 p").style.opacity = "100%";
        }, 400);
        
        setTimeout(() => {
            var person = document.querySelector("#Person-1");
            var surroundings = document.querySelector("#Surround-1");
            person.style.opacity = "100%";
            surroundings.style.opacity = "100%";
        }, 1000);
        
        setTimeout(() => {
            var cart = document.querySelector("#Cart-1");
            cart.style.opacity = "100%";
        }, 1200);
        
        setTimeout(() => {
            var boxes1 = document.querySelector("#Boxes-1_2");
            boxes1.style.opacity = "100%";
        }, 1400);
        
        setTimeout(() => {
            var boxes2 = document.querySelector("#Boxes-1");
            boxes2.style.opacity = "100%";
        }, 1600);
        
        
        window.addEventListener("scroll", () => {
            var scrollLimit = 650;
            if(scrollY >= scrollLimit) {
                setTimeout(() => {
                    document.querySelector(".left-2 h1").style.opacity = "100%";
                }, 200);
                
                setTimeout(() => {
                    document.querySelector(".left-2 p").style.opacity = "100%";
                }, 400);
                
                setTimeout(() => {
                    var person2 = document.querySelector("#Person-2");
                    person2.style.opacity = "100%";
                }, 1000);
                
                setTimeout(() => {
                    var three1 = document.querySelector("#Three-1");
                    three1.style.opacity = "100%";
                }, 1200);
                
                setTimeout(() => {
                    var three2 = document.querySelector("#Three-2");
                    three2.style.opacity = "100%";
                }, 1400);
                
                setTimeout(() => {
                    var star1 = document.querySelector("#Star-1");
                    star1.style.opacity = "100%";
                }, 1600);
                
                setTimeout(() => {
                    var star2 = document.querySelector("#Star-2");
                    star2.style.opacity = "100%";
                }, 1800);
                
                setTimeout(() => {
                    var star3 = document.querySelector("#Star-3");
                    star3.style.opacity = "100%";
                }, 2000);
            }
            scrollLimit = 1200;
            if(scrollY >= scrollLimit) {
                
                setTimeout(() => {
                    var icon = document.querySelector("#icon");
                    icon.style.opacity = "100%";
                }, 200);
                
                setTimeout(() => {
                    document.querySelector(".right-3 h1").style.opacity = "100%";
                }, 400);
                
                setTimeout(() => {
                    document.querySelector(".right-3 p").style.opacity = "100%";
                }, 600);
            }
            
            const scrolled = scrollY;
            console.log(scrolled);
        })
    }, 3000);
    }
    