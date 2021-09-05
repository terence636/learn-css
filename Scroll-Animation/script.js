const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight/5 * 4
    console.log(triggerBottom)
    const boxTop = boxes[0].getBoundingClientRect().top
    console.log(boxTop)
    boxes.forEach(box=>{
        const boxTop = box.getBoundingClientRect().top
        // console.log()
        if(boxTop < triggerBottom)
            box.classList.add('show')
        else 
            box.classList.remove('show')
    })

}