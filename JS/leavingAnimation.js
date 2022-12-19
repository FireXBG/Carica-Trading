window.onload = function animate() {
  
    const anchors = document.querySelectorAll(".content a");
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
  
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        let loader = document.querySelector(".loader");
        let targer = e.target.href;
        setTimeout(() => {
          if (location.pathname=="/AboutUs.html") {
            document.querySelector(".about-us-h1").style.display = "none";
          } 
          loader.style.opacity = "0";
          loader.style.display = "flex";
          setTimeout(() => {
            loader.style.opacity = "1";
            if ((window.innerWidth <= 950)) {
              var navigation = document.querySelector("nav");
              navigation.style.opacity = 0;
            }
          }, 100);
        }, 200);
  
        setTimeout(() => {
          window.location.href = targer;
        }, 500);
      });
    }
  };