window.addEventListener("load", animate(), true);
function animate() {
        if(window.innerWidth > 1600) {
            setTimeout(() => {
                
                setTimeout(() => {
                    var heading = document.querySelector(".products-h1");
                    heading.style.opacity = "100%";
                }, 200);
                
                var box = document.querySelector(".products-grid").children;
                setTimeout(() => {
                    box.item(0).style.opacity = "100%";
                }, 200);
                setTimeout(() => {
                    box.item(1).style.opacity = "100%";
                }, 400);
                setTimeout(() => {
                    box.item(2).style.opacity = "100%";
                }, 600);
                setTimeout(() => {
                    box.item(3).style.opacity = "100%";
                }, 800);
                
                window.addEventListener("scroll", () => {  
                    const scrolled = window.scrollY;
                    
                    var scrollLimit = 400;
                    if (scrolled >= scrollLimit) {
                        setTimeout(() => {
                            box.item(4).style.opacity = "100%";
                        }, 200);
                        setTimeout(() => {
                            box.item(5).style.opacity = "100%";
                        }, 400);
                        setTimeout(() => {
                            box.item(6).style.opacity = "100%";
                        }, 600);
                        setTimeout(() => {
                            box.item(7).style.opacity = "100%";
                        }, 800);
                    }
                    
                    scrollLimit = 1200;
                    if (scrolled >= scrollLimit) {
                        setTimeout(() => {
                            box.item(8).style.opacity = "100%";
                        }, 200);
                        setTimeout(() => {
                            box.item(9).style.opacity = "100%";
                        }, 400);
                        setTimeout(() => {
                            box.item(10).style.opacity = "100%";
                        }, 600);
                        setTimeout(() => {
                            box.item(11).style.opacity = "100%";
                        }, 800);
                    }
                    
                    scrollLimit = 1800;
                    if(scrolled >= scrollLimit) {
                        setTimeout(() => {
                            box.item(12).style.opacity = "100%";
                        }, 200);
                        setTimeout(() => {
                            box.item(13).style.opacity = "100%";
                        }, 400);
                    }
                })
            }, 3500);
        } else if (window.innerWidth < 1600 && window.innerWidth > 1250) {
            var box = document.querySelector(".products-grid").children;
            setTimeout(() => {   
                setTimeout(() => {
                    document.querySelector(".products-h1").style.opacity = '100%';
                    box.item(0).style.opacity = "100%"; 
                }, 200);
                setTimeout(() => {
                    box.item(1).style.opacity = "100%"; 
                }, 400);
                setTimeout(() => {
                    box.item(2).style.opacity = "100%"; 
                }, 600);

                window.addEventListener("scroll", () => {
                    var scrolled = window.scrollY;
                    let scrollLimit = 400;
                    if(scrolled >= scrollLimit) {
                        setTimeout(() => {
                            box.item(3).style.opacity = "100%";
                        }, 200);
                        setTimeout(() => {
                            box.item(4).style.opacity = "100%";
                        }, 400);
                        setTimeout(() => {
                            box.item(5).style.opacity = "100%";
                        }, 600);
                    }
                    scrollLimit = 1000;
                    if (scrolled >= scrollLimit) {
                        setTimeout(() => {
                            box.item(6).style.opacity = "100%";
                        }, 200);
                        setTimeout(() => {
                            box.item(7).style.opacity = "100%";
                        }, 400);
                        setTimeout(() => {
                            box.item(8).style.opacity = "100%";
                        }, 600);
                    }
                    scrollLimit = 1900;
                    if(scrolled >= scrollLimit) {
                        setTimeout(() => {
                            box.item(9).style.opacity = "100%";
                        }, 200);
                        setTimeout(() => {
                            box.item(10).style.opacity = "100%";
                        }, 400);
                        setTimeout(() => {
                            box.item(11).style.opacity = "100%";
                        }, 600);
                    }
                    scrollLimit = 2400;
                    if (scrolled >= scrollLimit) {
                        setTimeout(() => {
                            box.item(12).style.opacity = "100%";
                        }, 200);
                        setTimeout(() => {
                            box.item(13).style.opacity = "100%";
                        }, 400);
                    }
                })
            }, 3500);
        } else if (window.innerWidth <= 1250 && window.innerWidth >= 1000) {
            var box = document.querySelector(".products-grid").children;
            setTimeout(() => {
                document.querySelector(".products-h1").style.opacity = "100%";
                setTimeout(() => {
                    box.item(0).style.opacity = "100%";
                }, 200);
                setTimeout(() => {
                    box.item(1).style.opacity = "100%";
                }, 400);
                window.addEventListener("scroll", () => {
                    var scrolled = window.scrollY;
                    console.log(scrolled);
                    var scrollLimit = 370;
                    if(window.scrollY >= scrollLimit) {
                        setTimeout(() => {
                            box.item(2).style.opacity = "100%";
                        }, 200);
                        setTimeout(() => {
                            box.item(3).style.opacity = "100%";
                        }, 400);
                    }
                    scrollLimit = 1100;
                    if(window.scrollY >= scrollLimit) {
                        setTimeout(() => {
                            box.item(4).style.opacity = "100%";
                        }, 200);
                        setTimeout(() => {
                            box.item(5).style.opacity = "100%";
                        }, 400);
                    }
                    scrollLimit = 1600;
                    if(window.scrollY >= 1600) {
                        setTimeout(() => {
                            box.item(6).style.opacity = "100%";
                        }, 200);
                        setTimeout(() => {
                            box.item(7).style.opacity = "100%";
                        }, 400);
                    }

                    scrollLimit = 2250;
                    if(window.scrollY >= 2250) {
                        setTimeout(() => {
                            box.item(8).style.opacity = "100%";
                        }, 200);
                        setTimeout(() => {
                            box.item(9).style.opacity = "100%";
                        }, 400);
                    }
                    
                    scrollLimit = 3100;
                    if(window.scrollY >= 3100) {
                        setTimeout(() => {
                            box.item(10).style.opacity = "100%";
                        }, 200);
                        setTimeout(() => {
                            box.item(11).style.opacity = "100%";
                        }, 400);
                    }

                    scrollLimit = 3600;
                    if(window.scrollY >= scrollLimit) {
                        setTimeout(() => {
                            box.item(12).style.opacity = "100%";
                        }, 200);
                        setTimeout(() => {
                            box.item(13).style.opacity = "100%";
                        }, 400);
                    }
                })
            }, 3500);
            } else if(window.innerWidth <= 1000) {
                var box = document.querySelector(".products-grid").children;
                setTimeout(() => {
                    document.querySelector(".products-h1").style.opacity = "100%";
                    setTimeout(() => {
                        box.item(0).style.opacity = "100%";
                    }, 200);

                    window.addEventListener("scroll", () => {
                        var scrolled = window.scrollY;
                        console.log(scrolled);

                        var scrollLimit = 210;
                        if(window.scrollY >= scrollLimit) {
                            box.item(1).style.opacity = "100%";
                        }

                        scrollLimit = 850;
                        if(window.scrollY >= scrollLimit) {
                            box.item(2).style.opacity = "100%";
                        }

                        scrollLimit = 1600;
                        if(window.scrollY >= scrollLimit) {
                            box.item(3).style.opacity = "100%";
                        }

                        scrollLimit = 2200;
                        if(window.scrollY >= scrollLimit) {
                            box.item(4).style.opacity = "100%";
                        }

                        scrollLimit = 2900;
                        if(window.scrollY >= scrollLimit) {
                            box.item(5).style.opacity = "100%";
                        }

                        scrollLimit = 3500;
                        if(window.scrollY >= scrollLimit) {
                            box.item(6).style.opacity = "100%"
                        }

                        scrollLimit = 4250;
                        if(window.scrollY >= scrollLimit) {
                            box.item(7).style.opacity = "100%";
                        }

                        scrollLimit = 5000;
                        if(window.scrollY >= scrollLimit) {
                            box.item(8).style.opacity = "100%";
                        }

                        scrollLimit = 5500;
                        if(window.scrollY >= scrollLimit) {
                            box.item(9).style.opacity = "100%";
                        }

                        scrollLimit = 6250;
                        if(window.scrollY >= scrollLimit) {
                            box.item(10).style.opacity = "100%";
                        }

                        scrollLimit = 6900;
                        if(window.scrollY >= scrollLimit) {
                            box.item(11).style.opacity = "100%";
                        }

                        scrollLimit = 7550;
                        if(window.scrollY >= scrollLimit) {
                            box.item(12).style.opacity = "100%";
                        }

                        scrollLimit = 8200;
                        if(window.scrollY >= scrollLimit) {
                            box.item(13).style.opacity = "100%";
                        }
                    })
                }, 3500);
            }
        }