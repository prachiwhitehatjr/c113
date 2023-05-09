function preload(){

}

function setup(){
canvas=createCanvas(640,480);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();
tint_color="";
}
function draw(){
image(video,0,0,640,480);
fill('purple');
stroke('blue');
circle(100, 100, 100);
circle(550, 100, 100);
circle(100, 400, 100);
circle(550, 400, 100);


rect(100, 70, 450, 55);
rect(100, 70, 55, 380);
rect(520, 70, 55, 380);
rect(100, 380, 450, 55);

}

function take_snapshot(){
    save('Thegloriusfilter.png');
}