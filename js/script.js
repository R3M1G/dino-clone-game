
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() =>{
        mario.classList.remove('jump');
    },500)
}

const loop = setInterval(() =>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); 
    const score = 0;
    console.log(score);

    if (pipePosition <= 120 && pipePosition> 0 && marioPosition <70) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

       mario.src ='./images/game-over.png';
       mario.style.marginLeft = '50px'
       mario.style.width = '79px'
        
        clearInterval(loop);
    } 
    if (pipePosition < 1) {
        score+1;
    }
},10)

document.addEventListener('keydown', jump);
 
console.log(score);