function setup(){
    canvas=createCanvas(400,400);
    canvas.position(700,200);
    video=createCapture(VIDEO);
    video.size(400,400);
    video.position(200,200);
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes);
}
function modelloaded(){
    console.log("Model is loaded");
}
function draw(){
    background("white");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
    }
}