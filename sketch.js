var database;
var canvas;
var gameState = 0;
var playerCount,form,player,game;
var allPlayers;
var cars,car1,car2,car3,car4;
var car1_img,car2_img,car3_img,car4_img,track_img,ground_img;

function preload(){
    ground_img = loadImage("images/ground.png");
    track_img = loadImage("images/track.jpg");
    car1_img = loadImage("images/car1.png");
    car2_img = loadImage("images/car2.png");
    car3_img = loadImage("images/car3.png");
    car4_img = loadImage("images/car4.png");

}
function setup(){
    database = firebase.database();

   canvas =  createCanvas(displayWidth-20,displayHeight-20);

   game = new Game();
   game.getState();
   game.start();
}

function draw(){
 
    if (playerCount === 4){
        game.update(1)
    }
    if (gameState === 1){
        clear();
        game.play();

    }
    if (gameState === 2){
        game.end();
    }
}


