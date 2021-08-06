var ball;
var database
var gameState = 0,playerCount = 0;
var form
var game,player
var allPlayers
var car1,car2,car3,car4,cars

function setup(){
    createCanvas(500,500);
  

    database = firebase.database()
   game = new Game()
   game.readState()
   game.start()

}

function draw(){
    background("white");
   
    drawSprites();
}


