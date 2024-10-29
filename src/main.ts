// Render Loop: https://spicyyoghurt.com/tutorials/html5-javascript-game-development/create-a-proper-game-loop-with-requestanimationframe


import './style.css'
import { Logo } from './logo';
/*
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    let logo = new Logo();

    //const image = new Image(); // Create new img element
    //image.src = "assets/jpg.png"; // Set source path
    //ctx?.drawImage(image, 50, 50);

    ctx?.fillRect(logo.x, logo.y, logo.w, logo.h);
  }
*/

let canvas: HTMLCanvasElement;
let context: any;
let secondsPassed;
let oldTimeStamp: number;
let fps;
let logo: Logo;

  window.onload = init;

  function init(){
    canvas = document.getElementById('canvas') as HTMLCanvasElement;
    context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    logo = new Logo(0.05);
    oldTimeStamp = 0;

    // Start the first frame request
    window.requestAnimationFrame(gameLoop);
  }

  function gameLoop(timeStamp: any){
    // Calculate the number of seconds passed since the last frame
    secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;

    // Calculate fps
    fps = 0;
    fps = Math.round(1 / secondsPassed);
    
    draw(secondsPassed);

    // Draw number to the screen
    context.fillStyle = '#535bf2';
    context.font = '25px Arial';
    context.fillStyle = 'black';
    context.fillText("FPS: " + fps, 10, 30);


    // Keep requesting new frames
    window.requestAnimationFrame(gameLoop);
  }

  function draw(dt:number){
    context?.clearRect(0, 0, canvas.width, canvas.height);  
    
    logo.update(dt, canvas.width, canvas.height);
    logo.draw(context);
    //context?.fillRect(logo.x, logo.y, logo.w, logo.h);
  }