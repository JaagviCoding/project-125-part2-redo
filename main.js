difference =0;
leftWristX = 0;
rightWristY = 0;
function setup()
{
    video = createCapture(VIDEO);
        video.size(550,500)
        canvas = createCanvas(550,500);
        canvas.position(560,150);
        poseNet = ml5.poseNet(video,modelLoaded);
        poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('poseNet is initialized');
}
function gotPoses(results)
{
 if(results.length>0)
 {
 console.log(results);
 leftWristX = results[0].pose.leftWrist.x;
 rightWristX = results[0].pose.rightWrist.x;
 difference = floor(leftWristX - rightWristX);
 }
}
function draw()
{

    background('#6C91C2');
    document.getElementById("square_sides").innerHTML = "The font size is"+difference+ " px";
    textSize(difference);

    fill("FFE787");
    text('Peter', 50, 400)    
}
