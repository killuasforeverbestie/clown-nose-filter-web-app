nosex = 0
nosey = 0
function preload(){
clownnose = loadImage('https://i.postimg.cc/V6hLvw58/Clown-nose-large.webp') 
}

function setup(){
canvas=createCanvas(300,300);
canvas.position(1120,500);
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotposes);
}

function draw(){
image(video,0,0,300,300);
image(clownnose,nosex,nosey,30,30)
}

function modelLoaded(){
console.log("poseNet is initialized");

}

function gotposes(results){
if(results.length>0){
nosex = results[0].pose.nose.x -15
nosey = results[0].pose.nose.y -10
console.log(results)
console.log("nosex = "+results[0].pose.nose.x)
console.log("nosey = "+results[0].pose.nose.y)
}
}