noseX = 0;
noseY = 0;

function preload() {
    image1 = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {
    canvas = createCanvas(350,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350,350);
    video.hide();
    
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);
}

function modelloaded() {
    console.log('posenet has initialized')
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose X = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);

        noseX = results[0].pose.nose.x - 10;
        noseY = results[0].pose.nose.y -10;
    }
}

function draw() {
    image(video,0,0,350,350);
    image(image1,noseX,noseY,40,40);
}

function save() {

}