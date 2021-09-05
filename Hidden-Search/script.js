const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const search = document.querySelector('.search')

btn.addEventListener('click', ()=>{
    console.log("click")
    search.classList.toggle('active')
    input.focus()
})

