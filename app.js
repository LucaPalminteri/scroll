// Variables ----------------------------------------------------------------------------------------------------------------
const limit = document.body.offsetHeight;
let scroll = window.scrollY;
let speed = 2
let play = false

// Creating Elements --------------------------------------------------------------------------------------------------------
const box = document.createElement('div');
const btnOne = document.createElement('button');
const btnTwo = document.createElement('button');
const btnThree = document.createElement('button');

// Adding content to elements -----------------------------------------------------------------------------------------------
btnOne.textContent = 'Speed -';
btnTwo.textContent = 'Play/Stop';
btnThree.textContent = 'Speed +';

// Styling elements ---------------------------------------------------------------------------------------------------------
const sty = box.style;
sty.padding = '10px';
sty.position = 'fixed';
sty.right = '10px';
sty.bottom = '10px';
sty.zIndex = '1000';
btnTwo.style.margin = '0 10px'

// Logic --------------------------------------------------------------------------------------------------------------------
btnTwo.addEventListener('click',()=>{
    scroll = window.scrollY;
    play ? play = false : play = true;
    let interval = setInterval(()=>
    {
        if(!play) {
            clearInterval(interval)
            scroll = window.scrollY;
        }
        window.scroll(0,scroll)
        scroll+=speed
    },50)
    interval
})

btnOne.addEventListener('click',()=> speed-=0.25)
btnThree.addEventListener('click',()=>speed+=0.25)

// Appending childs ---------------------------------------------------------------------------------------------------------
box.append(btnOne,btnTwo,btnThree)
document.body.appendChild(box);
document.body.style.scrollBehavior = 'smooth'