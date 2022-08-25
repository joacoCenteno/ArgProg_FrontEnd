const scrollUp = document.querySelector(".scroll-up");

window.addEventListener("scroll", ()=>{
    if(this.scrollY >= 350) scrollUp.classList.add("active");
    else scrollUp.classList.remove("active");
});


