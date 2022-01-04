const Engine = Matter.Engine;
const Composite = Matter.Composite;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var backgroundImg;

var slingshot, gameState = "onSling", score = 15;



function preload() {
    backgroundImg = loadImage("./sprites/circus-back.jpg");
    selectSound = loadSound('sounds/release.mp3');
    flySound = loadSound('sounds/fly.mp3');
}

function setup() {
    canvas = createCanvas(1550, 600);
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(width / 2, height - 10, width, 20);
    platform1 = new Ground(600, 200, 200, 20);
    platform2 = new Ground(850, 480, 200, 20);
    platform3 = new Ground(1300, 300, 200, 20);
    platform4 = new Ground(1300, 520, 200, 20);
    clown1 = new Clown(600, 150, 80, 80);
    apple1 = new Apple(600, 120);
    clown2 = new Clown(850, 430, 80, 80);
    apple2 = new Apple(850, 400);
    clown3 = new Clown(1300, 250, 80, 80);
    apple3 = new Apple(1300, 220);
    clown4 = new Clown(1300, 470, 80, 80);
    apple4 = new Apple(1300, 440);
    arrow = new Arrow(125, 480);
    slingshot = new Slingshot(arrow.body, { x: 125, y: 480 })
}

function draw() {
    background(backgroundImg);
    Engine.update(engine);
    textSize(25);
    fill('white');
    text('Arrows Left:' + score, width / 2, 40);
    ground1.display();
    platform1.display();
    platform2.display();
    platform3.display();
    platform4.display();
    clown1.display();
    clown2.display();
    clown3.display();
    apple1.display();
    apple3.display();
    clown4.display();
    apple4.display();
    apple2.display();
    arrow.display();
    slingshot.display();


}

function mouseDragged() {
    if (gameState != "launched") {

        Matter.Body.setPosition(arrow.body, { x: mouseX, y: mouseY });
        selectSound.play();
    }
}

function mouseReleased() {
    slingshot.fly();
    gameState = "launched";
    flySound.play();
    if (score != 0) {
        score = score - 1;
    }
}

function keyPressed() {
    if (keyCode == 32 && score > 0) {
        slingshot.attach(arrow.body);
        gameState = "onSling";
        arrow.trajectory = [];
        Matter.Body.setPosition(arrow.body, { x: 125, y: 480 })
    }
}