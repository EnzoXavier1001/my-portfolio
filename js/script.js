function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    textoArray.forEach((letra, i) => {
    setTimeout(() => 
        elemento.innerHTML += letra, 75 * i)
})
}

const titulo = document.querySelector('.-typewritter')
typeWriter(titulo)

let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click",  () => {

    document.body.style.overflow = show ? "hidden" : "initial"
    
    menuSection.classList.toggle("on", show)
    show = !show;
})