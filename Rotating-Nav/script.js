const bOpen = document.getElementById('open')
const bClose = document.getElementById('close')
const container = document.querySelector('.container')

bOpen.addEventListener('click',()=>{
    console.log('open')
    container.classList.add('show-nav')

})

bClose.addEventListener('click',()=>{
    console.log('close')
    container.classList.remove('show-nav')
})

