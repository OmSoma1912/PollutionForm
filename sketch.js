var canvas, backgroundImg;
var gameState = 0;
var database;
var form, page;

function setup(){
    canvas = createCanvas(400,400);
    database = firebase.database();

    page = new Page();
    page.getState();
    page.start();

   


}

function draw(){
    
    
//console.log(client_answer);
}

