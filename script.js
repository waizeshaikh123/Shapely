
window.addEventListener("scroll", function(){
    let naving = this.document.querySelector(".naving");
    naving.classList.toggle("sticky", this.window.scrollY > 0)
})