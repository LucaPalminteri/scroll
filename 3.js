const box = document.createElement('div');
const btnOne = document.createElement('button');
const btnTwo = document.createElement('button');
const btnThree = document.createElement('button');

box.innerHTML = `
<button id='btn'>Speed -</button>
<button>Play/Stop</button>
<button>Speed +</button>
`;

box.style.padding = '10px';
box.style.border = '1px solid red';
box.style.position = 'fixed';
box.style.right = '10px';


document.body.appendChild(box);
document.body.style.height = '400vh'
document.body.style.background= 'linear-gradient(0deg, rgba(109,234,58,0.409868170901173) 0%, rgba(185,212,60,1) 100%)'