const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var floor,roof,plat1,plat2;
var slingshot,hexa;
var engine,world;

function preload(){







}


function setup(){
    Engine.update(engine);
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;



roof=new Ground(600,1100,1200,10);
floor=new Ground()







}

function draw(){
roof.display();




}