var inc = 0.1;
var scl = 10;
var cols, rows;
var particles = [];
//interesting
var zoff = 0;

var flowfield;

function setup() {
    //400 by 400 beyond my GTX1080's power
    //actually, if you don't draw those vectors
    //800 by 600 with 5000 particles is affordable. 
    createCanvas(windowWidth, windowHeight);
    console.log(`${windowWidth} - ${windowHeight}`);
    frameRate(24);
    // cols = floor(width / scl);
    // rows = floor(height / scl);

    // test event inside p5.js function
    // works, nice.
    // another thought, setInterval, add an animation
    // console.log(document.readyState);
    // document.getElementById("reset").addEventListener("click", function(event) {
    //     console.log('before', particles.length);
    //     clear();
    //     console.log('after', particles.length);
    // }, false);

    //es6 
    //cache array for vectors at each position
    // flowfield = new Array(cols * rows);
    calField();
    //interesting, adding 1000 particles doesn't slow down my machine
    //looks like vector calculation for perlin noise at each position 
    //eat too much GPU
    for (var i = 0; i < 5000; i++) {
        particles.push(new Particle());
    }
    background(255);
}

function calField() {
    // re-calculate the vector
    // maybe we should justify the scl too.
    cols = floor(width / scl);
    rows = floor(height / scl);
    flowfield = null;
    flowfield = new Array(cols * rows);
}

function draw() {
    var yoff = 0;
    for (var y = 0; y < rows; y++) {
        var xoff = 0;
        for (var x = 0; x < cols; x++) {
            var index = x + y * cols;
            var r = noise(xoff, yoff, zoff);
            //multiply angle by 2 will add vector to all direction
            var angle = r * TWO_PI * 2;
            var v = p5.Vector.fromAngle(angle);
            //control the force vector
            v.setMag(1);
            flowfield[index] = v;
            xoff += inc;
        }
        yoff += inc;
        zoff += 0.0003;
    }

    for (let p of particles) {
        p.follow(flowfield);
        p.update();
        p.show();
        p.edges();
    }
}

function windowResized() {
    // resize will clear the canvas
    resizeCanvas(windowWidth, windowHeight);
    calField();
    // reset particles
    for (let p of particles) {
        p.reset();
    }
}

// maybe I should add a cancel function