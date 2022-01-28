ringer= "";
buoy= "";

function preload() {
    ringer= loadSound("alarm_ringer.mp3");
    buoy= loadImage("https://blog.coveo.com//le-contenu/fichiers/2020/02/smiling-baby-biting-right-index-finger-1648374-720x430.jpg")
}
function setup() {
    canvas= createCanvas(700, 500);
    canvas.center();

}
function draw() {
    image(buoy,0,0,700,500);
}