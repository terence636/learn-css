const bg = document.querySelector(".bg")
const loadingText = document.querySelector(".loadingText")


let blurLevel = 0;
let int;
let isRunning = false;

const blurring = () => {
    blurLevel++
    loadingText.innerHTML = `${blurLevel}%`
    const level = scale (blurLevel, 0, 100, 30, 0)
    const opaq = scale (blurLevel, 0, 100, 1, 0)
    bg.style.filter = "blur("+level+"px)";
    loadingText.style.opacity = opaq;
    if(blurLevel > 99) clearInterval(int)
    // console.log(blurLevel)
}

loadingText.addEventListener('click', ()=>{
    console.log("gb click")
    if(isRunning === false) {
        int = setInterval(blurring,30)
        isRunning = true;
    }
    else {
        clearInterval(int)
        isRunning = false;
    }

    if(blurLevel > 99) 
        blurLevel = 0;
})

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
