function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 75);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
console.log("PoseNet is Intialized!")
}

function draw() {
    background("#979797");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}