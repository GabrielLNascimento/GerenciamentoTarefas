import './assets/css/style.css';

const btn = document.getElementById("btn")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    const input = document.querySelectorAll(".input")
    for (let inp of input) {
        inp.value = ""
    }
})