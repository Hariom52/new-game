 score = 0;
 cross = true;

 audio = new Audio('music.mp3');
 audiogo = new Audio('gameover.mp3');
 setTimeout(() => {
      audio.play()
 }, 1000);

     document.onkeydown = function  (e) {
    console.log("Key code is: ", e.keycode)
    if (e.keycode == 38) {
    dino = document.querySelector('.dino');
    dino.classList.add('animateDino');
    setTimeout(() => {
     dino.classList.remove('animateDino');
     }, 700);
    }

if (e.keycode == 39) {
        dino = document.querySelector('.dino');
        dinoX = paraseInt(window.getComputedStyle(dino, null). getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
       }
       if(e.keycode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
             }
         }
      
setInterval(() =>  {
   dino = document.querySelector('.dino');
   gameOver = document.getElementById('gameOver');
   obstacle = document.querySelector('.obstacle');
  
 dx = parseInt (window.getComputedStyle(dino, null).getPropertyValue('left'));
 dy = parseInt (window.getComputedStyle(dino, null).getPropertyValue('top'));
 
 ox = parseInt (window.getComputedStyle(obstacle, null).getPropertyValue('left'));
 oy = parseInt (window.getComputedStyle(obstacle, null).getPropertyValue('top'));

 offsetX = Math.abs(dx - ox);
 offsetY = Math.abs(dy - oy);
 // console.log(offsetX, offsetY)
 if (offsetX < 73 && offsetY < 52) {
    gameOver.innerHTML ="Game Over - Reload to Play Again"
    console.log("gameOver");
    obstacle.classList.remove('obstacleAni')
  audiogo.play();
  setTimeout(() => {
    audiogo.pause();
    audio.pause();
  }, 1000); 
  }
 else if (offsetX < 145 && cross) {
   score += 1;
   updateScore(score);
   cross = false;
  setTimeout(() => {
      cross = true;
  }, 1000);
 setTimeout(() => {
 aniDur = parseFloat(window.getComputedStyle(obstacle , null).getPropertyValue('animation-duration'));
 newDur = aniDur - 0.1;
 obstacle.style.animationDuration = newDur + 's'
console.log('New animationduration: ', newDur)
}, 500);
 }
}, 10);
function updateScore(score) {
  scoreCont.innerHTML = "Your score : " + score
}

