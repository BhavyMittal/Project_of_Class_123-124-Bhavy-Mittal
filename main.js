function setup()
{
    canvas = createCanvas(550,550);
    canvas.position(560,100);

    video = createCapture(VIDEO);
    video.size(550,500);

    pose = ml5.poseNet(video,modelLoaded); //Intitalizing
    pose.on('pose',gotPoses); //start /execute
}

function gotPoses(Results)
{
    if (Results.length > 0) {

        console.log(Results);
    }
}

function modelLoaded()
{
    console.log("modeloaded");
}
