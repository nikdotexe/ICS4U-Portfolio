// Inspired and Adapted from Challenge: Mutual attraction
    //Essntially the dots float around the canvas as the critters and fly all across the screen and sometimes off of it given enough time.
background(0, 142, 250);
var G = 2;

var Mover = function(m, x, y) {
    this.mass = m;
    this.position = new PVector(x, y);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
};
  
Mover.prototype.applyForce = function(force) {
    var f = PVector.div(force, this.mass);
    this.acceleration.add(f);
};
  
Mover.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
};

Mover.prototype.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(0, 0, 0, 127);
    ellipse(this.position.x, this.position.y, this.mass*16, this.mass*16);
};

Mover.prototype.calculateAttraction = function(m) {
     // Calculate direction of force
    var force = PVector.sub(this.position, m.position);
     // Distance between objects
    var distance = force.mag();
    // Limiting the distance to eliminate "extreme" results for very close         or very far objects
    distance = constrain(distance, 5.0, 25.0);
     // Calculate gravitional force magnitude
    force.normalize();
    var strength = (G * this.mass * m.mass) / (distance * distance);
    force.mult(strength);
    // Get force vector --> magnitude * direction
    if (distance < this.mass*8){
        force.mult(-2);
    }
    return force;
};


var movers = [];
for (var i = 0; i < 5; i++) {
    movers[i] = new Mover(random(0.1, 2), random(width), random(height));
}

var draw = function() {
    background(86, 136, 252);

    for (var i = 0; i < movers.length; i++) {
        for (var j = 0; j < movers.length; j++) {
            if (i !== j) {
                var force = movers[j].calculateAttraction(movers[i]);
                movers[i].applyForce(force);
            }
        }

        movers[i].update();
        movers[i].display();
    }
};




