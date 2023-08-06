const startMenu = document.querySelector('#start-menu');
const startBtn = document.querySelector('#start-btn');

startMenu.style.bottom = "-650px"
startMenu.addEventListener('click', ()=>{
    startMenu.style.bottom = "-650px";
})
startBtn.addEventListener('click', ()=>{
    console.log('hey')
    // console.log()
    if(startMenu.style.bottom == "50px"){
        console.log('work')
        startMenu.style.bottom = "-650px";
    }
    else{
        console.log('work 2')
        startMenu.style.bottom = "50px";
    }
})