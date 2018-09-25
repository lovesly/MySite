// import Particle from './Particle';

const wrapper = function(p) {
    const inc = 0.1;
    const scl = 10;
    let cols, rows;
    const particless = [];
    //interesting
    let zoff = 0;
    let flowfield;
    let width, height;

    p.preload = function() {

    }

    // setup() -------------------------------------------------------------------
    p.setup = function() {  
        p.createCanvas(800, 500);
        width = p.width;
        height = p.height;
        // p.colorMode(p.RGB, 255, 255, 255, 1.0);
        // p.pixelDensity(1);
        p.frameRate(24);
        p.background('rgba(182,150,198,0.3)');
        calField();
        for (var i = 0; i < 2000; i++) {
            particless.push(new Particle());
        }
        console.log(inc, scl, cols, rows);
    }
  
    // draw() --------------------------------------------------------------------
    p.draw = function() {
        var yoff = 0;
        for (var y = 0; y < rows; y++) {
            var xoff = 0;
            for (var x = 0; x < cols; x++) {
                var index = x + y * cols;
                var r = p.noise(xoff, yoff, zoff);
                //multiply angle by 2 will add vector to all direction
                var angle = r * p.TWO_PI * 2;
                // there is no fucking p5.Vector in this fucking module!!!!
                // test
                var v = p.createVector(p.cos(angle), p.sin(angle));
                // var v = p.createVector().fromAngle(angle);
                //control the force vector
                v.setMag(1);
                flowfield[index] = v;
                xoff += inc;
            }
            yoff += inc;
            zoff += 0.0003;
        }

        for (let p of particless) {
            p.follow(flowfield);
            p.update();
            p.show();
            p.edges();
        }
    }

    // private function
    function calField() {
        // no access to outside scope? 
        cols = p.floor(width / scl);
        rows = p.floor(height / scl);
        flowfield = null;
        flowfield = new Array(cols * rows);
        console.log(inc, width, height, );
    }

    function Particle() {
        this.pos = p.createVector(p.random(width), p.random(height));
        this.vel = p.createVector(0, 0);
        this.acc = p.createVector(0, 0);
        this.prePos = this.pos.copy();
    
        //interesting part
        //question: can we control the speed, like slow down?
        //now we just add speed, so it will become faster and faster
    
        this.maxspeed = 2;
    
        this.reset = function() {
            this.pos.set(p.random(width), p.random(height));
            this.vel.mult(0);
            this.acc.mult(0);
            this.prePos = this.pos.copy();
        };
    
        this.update = function() {
            this.vel.add(this.acc);
            this.vel.limit(this.maxspeed);
            this.pos.add(this.vel);
            this.acc.mult(0);
        }
    
        this.applyForce = function(force) {
            this.acc.add(force);
        }
    
        this.show = function() {
            p.stroke(0, 5);
            p.strokeWeight(1);
            // point(this.pos.x, this.pos.y);
            p.line(this.pos.x, this.pos.y, this.prePos.x, this.prePos.y);
            this.updatePrev();
        }
    
        this.edges = function() {
            if (this.pos.x > width) {
                this.pos.x = 0;
                this.updatePrev();
            }
            if (this.pos.x < 0) {
                this.pos.x = width;
                this.updatePrev();
            }
            if (this.pos.y > height) {
                this.pos.y = 0;
                this.updatePrev();
            }
            if (this.pos.y < 0) {
                this.pos.y = height;
                this.updatePrev();
            }
        }
    
        this.follow = function(vectors) {
            var x = p.floor(this.pos.x/scl);
            var y = p.floor(this.pos.y/scl);
            var index = x + y * cols;
            var force = vectors[index];
            this.applyForce(force);
        }
    
        this.updatePrev = function() {
            this.prePos.x = this.pos.x;
            this.prePos.y = this.pos.y;
        }
    }
}

export default wrapper;