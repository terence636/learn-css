const icon = document.getElementById('icon')
const list = document.querySelector('.list')
const navItems = document.querySelectorAll('.navElement')

icon.addEventListener('click',()=>{
    console.log('icon')
    list.classList.toggle('show')
})

navItems.forEach(navItem=>{
    navItem.addEventListener('click',handleClick)
})

function handleClick(e) {
    clear()
    console.log({e})
    e.target.classList.add('active')
} 

function clear() {
    navItems.forEach(navItem=>{
        navItem.classList.remove('active')
    })
}