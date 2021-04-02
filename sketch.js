//Create variables here
var happyDog
var dog
var happydogImage
var dogImage
var database
var foodStock
var foodS
function preload()
{
	//load images here
  happydogImage = loadImage("images/happydog.png");
  dogImage = loadImage("images/dogImg.png")
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
dog = createSprite(250, 250, 10, 10)
dog.addImage(dogImage)
dog.scale = 0.5
foodStock=database.ref('foodStock')
foodStock.on("value",readStock)
}


function draw() {  
  background (46, 139, 87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happydogImage)

  }
  drawSprites();
  //add styles here

}

function readStock(data) {
foodS = data.val()
}

function writeStock(s){
  database.ref('/').update({
    foodS:s
  })
}