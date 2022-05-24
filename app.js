// Variables ----------------------------------------------------------------------------------------------------------------
const limit = document.body.offsetHeight;
let scroll = 0
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
sty.border = '1px solid red';
sty.position = 'fixed';
sty.right = '10px';
sty.zIndex = '1000';

btnTwo.style.margin = '0 10px'

// Logic --------------------------------------------------------------------------------------------------------------------
btnTwo.addEventListener('click',()=>{
    play ? play = false : play = true;
    let interval = setInterval(()=>
    {
        window.scroll(0,scroll)
        scroll+=speed
        if(!play) clearInterval(interval)
    },100)
    interval
})

btnOne.addEventListener('click',()=>{
    speed--;
})

btnThree.addEventListener('click',()=>{
    speed++;
})

// Appending childs ---------------------------------------------------------------------------------------------------------
box.append(btnOne,btnTwo,btnThree)

document.body.appendChild(box);
document.body.style.height = '400vh'
document.body.style.background= 'linear-gradient(0deg, rgba(109,234,58,0.409868170901173) 0%, rgba(185,212,60,1) 100%)'