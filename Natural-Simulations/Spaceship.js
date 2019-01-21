//Creates a spaceship object in the code, with constructor and methods.

//up arrow or Z is forward
//down arrow or X is stop
//left arrow turns left
//right arrow turns right
angleMode = "radians";
var moving = false;
var turnL = false;
var turnR = false;

//Spaceship
var Ship = function() {
    this.position = new PVector(width/2, height/2);
    this.velocity = new PVector(1, 0);
    this.acceleration = new PVector(0, 0);
    this.topspeed = 5;
    this.x = 0;
    this.y = 0;
    
    //If they press z, apply a thrust force that accelerates in the direction it's pointing.
    this.update = function (moving) {
        if (moving) {
            this.velocity.add(this.acceleration);
            this.velocity.limit(this.topspeed);
            this.position.add(this.velocity);
            this.acceleration.mult(0);
        }
    };
        
    this.display = function() {
        //If they press z, apply a thrust force that accelerates in the direction it's pointing.
        var angle = this.velocity.heading();
        
        stroke(74, 70, 74);
        strokeWeight(3);
        pushMatrix();
        rectMode(CENTER);
        translate(this.position.x, this.position.y);
        rotate(angle);
        
        //Draw the spaceship with a triangle and two thrusters on the bottom
        
        if (moving) {
            //white vibration in motion
            fill(191, 15, 21);
            ellipse(this.x - 25, this.y + 8, this.x + 20, this.y + 10);
            ellipse(this.x - 25, this.y - 8, this.x + 20, this.y + 10);
        }
            //thrusters
            fill(255, 149, 0);
            ellipse(this.x - 20, this.y - 8, this.x + 10, this.x + 10);
            ellipse(this.x - 20, this.y + 8, this.x + 10, this.x + 10);
            //ship body
            fill(51, 129, 255);
            triangle(this.x + 20, this.y, this.x - 20, this.y - 20, this.x - 20, this.y + 20);
            popMatrix(); 
    };
    
    this.applyForce = function(force) {
        this.acceleration.add(force);
    };
    
    //React to the user's key press: if they press left arrow, turn to the left, and if they press the right arrow, turn to the right.
    
    this.turnLeft = function() {
        var force = this.velocity.get();
        force.rotate(-PI/16);
        this.applyForce(force);
    };
    
    this.turnRight = function() {
        var force = this.velocity.get();
        force.rotate(PI/16);
        this.applyForce(force);
    };
    
    //Make the spaceship wrap around the edges of the canvas
    this.checkEdges = function() {
        if (this.position.x > width) {
            this.position.x = 0;
        }
        else if (this.position.x < 0) {
            this.position.x = width;   
        }
        if (this.position.y > height) {
            this.position.y = 0;
        }
        else if (this.position.y < 0) {
            this.position.y = height;   
        }
    };

};

var ship = new Ship();


//keyboard controls

var keyPressed = function() {
    
    //If they press z, apply a thrust force that accelerates in the direction it's pointing.
    if (key.toString() === "z" || keyCode === UP) {
        moving = true;    
    }
    if (key.toString() === "x" || keyCode === DOWN) {
        moving = false;   
    }
    if (keyCode === LEFT) {
        turnL = true;
    }
    else if (keyCode === RIGHT) {
        turnR = true;
    }
};

var keyReleased = function() {
    if (keyCode === LEFT) {
        turnL = false;
    }
    else if (keyCode === RIGHT) {
        turnR = false;
    }
};

//Stars (movers)

var G = 1;

var Mover = function(m, x, y) {
    this.mass = m;
    this.position = new PVector(x, y);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
    this.topseed = 2;
};
  
Mover.prototype.applyForce = function(force) {
    fill(this.position.y,this.position.x/2, this.position.y*2);
    var f = PVector.div(force, this.mass);
    this.acceleration.add(f);
};
  
Mover.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    
};

Mover.prototype.display = function() {
    noStroke();
    strokeWeight(2);
    ellipse(this.position.x, this.position.y, this.mass*5, this.mass*5);
};

Mover.prototype.calculateAttraction = function(m) {
    var force = PVector.sub(this.position, m.position);
    var distance = force.mag();
    distance = constrain(distance, 5.0, 25.0);
    force.normalize();
    var strength = (G * this.mass * m.mass) / (distance * distance);
    force.mult(strength);
    //mutual repulsion
    //force.mult(-1);
    return force;
};

Mover.prototype.checkEdges = function() {
        if (this.position.x > width) {
            this.position.x = 0;
        }
        else if (this.position.x < 0) {
            this.position.x = width;   
        }
        if (this.position.y > height) {
            this.position.y = 0;
        }
        else if (this.position.y < 0) {
            this.position.y = height;   
        }
};


var movers = [];
for (var i = 0; i < 20; i++) {
    movers[i] = new Mover(random(0.1, 2), random(width), random(height));
}

draw = function() {    
  
    background(13, 12, 12);

    for (var i = 0; i < movers.length; i++) {
        for (var j = 0; j < movers.length; j++) {
            if (i !== j) {
                var force = movers[j].calculateAttraction(movers[i]);
                movers[i].applyForce(force);
            }
        }
        
        movers[i].checkEdges();
        movers[i].update();
        movers[i].display();
    }
    
    if (turnL) {
        ship.turnLeft();     
    }
    else if (turnR) {
        ship.turnRight();   
    }
    ship.display();
    ship.update(moving);
    ship.checkEdges();
};



