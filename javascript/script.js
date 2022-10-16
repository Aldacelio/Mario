const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.clouds');
const refresh = document.querySelector('.refresh');
const score = document.querySelector('.score-points');
let millisecond = 0;
let second = 0;

const jump = () =>{

    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    } ,500);

}

const pontos = setInterval(() => { 
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
      }
      score.innerText = returnData(second);
}, 10);
  


const loop = setInterval(() => {
    const pipePosition = +window.getComputedStyle(pipe).left.replace('px','');
    console.log(pipePosition);
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudPosition = +window.getComputedStyle(cloud).left.replace('px','');

    if(pipePosition < 121 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './image/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        cloud.style.animation = 'none';
        cloud.style.left = `${cloudPosition}px`;

        refresh.style.display = 'block';

        clearInterval(pontos);
        clearInterval(loop);

    }
},10)



function returnData(input) {
    return input >= 10 ? input : `${input}`
}

document.addEventListener("keydown", jump);
