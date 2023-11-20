noseX=0;
noseY=0;

function preload() {
    lip_stick = loadImage('https://i.postimg.cc/8k9z6RXG/l1.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
         noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        
    }
}

function modelLoaded() {
    console.log('PoseNet Is Initialized')
}

function draw() {
    image(video, 0, 0, 300, 300);
  image(lip_stick, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png');
}