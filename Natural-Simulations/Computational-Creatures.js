//ANTS
//Ants wander around randomly until they are close to the food (mouse position), then they move towards the food.
    
 
    


// CONSTANTS

var maxDir = new PVector(width - 1, height - 1);
var maxMag = maxDir.mag();

// GENERIC MOVER OBJECT

var Mover = function(maxVelocity, maxAcceleration) {
    this.position = new PVector(width/2, height/2);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
    this.maxVelocity = maxVelocity; // usually -5 to 5
    this.maxAcceleration = maxAcceleration; // Usually 0 to 1
    this.color = color(0, 0, 0);
    this.size = 15;
};

Mover.prototype.update = function() {
    var mouse = new PVector(mouseX, mouseY);
    var dir = PVector.sub(mouse, this.position);
    var closeness = (maxMag - dir.mag()) / maxMag; // gives fraction 0 = furthest, 1 = closest

    dir.normalize();
    dir.mult(closeness);
    
    this.acceleration = dir;
    this.acceleration.limit(this.maxAcceleration);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxVelocity);
    this.position.add(this.velocity);
};

Mover.prototype.display = function() {
    stroke(0);
    strokeWeight(1);
    fill(this.color);
    ellipse(this.position.x, this.position.y, this.size, this.size);
};

Mover.prototype.checkEdges = function() {
  if (this.position.x > width) {
      this.position.x = 0;
  } else if (this.position.x < 0) {
      this.position.x = width;
  }

  if (this.position.y > height) {
      this.position.y = 0;
  } else if (this.position.y < 0) {
      this.position.y = height;
  }
};

// ANT OBJECT 

var Ant = function(maxVelocity, maxAcceleration) {
    this.position = new PVector(width/2, height/2);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
    this.maxVelocity = maxVelocity; // usually -5 to 5
    this.maxAcceleration = maxAcceleration; // Usually 0 to 1
    this.color = color(random(255),random(255), random(255));
    this.size = 5;
};

Ant.prototype = Object.create(Mover.prototype);

Mover.prototype.update = function() {
    var food = new PVector(mouseX, mouseY); // Food is the mouse, here
    var dir = PVector.sub(food, this.position);
    var closeness = (maxMag - dir.mag()) / maxMag; // gives fraction 0 = furthest, 1 = closest

    if (closeness < 0.75) {
        // Ants who are far away from the mouse/food walk fairly randomly
        var randomPoint = new PVector(random(0, width), random(0, height));
        dir = PVector.sub(randomPoint, this.position);
        var closeness = (maxMag - dir.mag()) / maxMag; // gives fraction 0 = furthest, 1 = closest
        dir.normalize();
        dir.mult(closeness);
    } else {
        // Ants close to the mouse/food go towards it
        dir.normalize();
        dir.mult(closeness);
    }
    
    this.acceleration = dir;
    this.acceleration.limit(this.maxAcceleration);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxVelocity);
    this.position.add(this.velocity);
};

Ant.prototype.display = function() {
    pushMatrix();
    translate(this.position.x, this.position.y);
    var degrees = atan2(this.velocity.y, this.velocity.x); // inverse tangent of rise over run
    rotate(degrees);
    stroke(0);
    fill(random(255),random(255), random(255));
    strokeWeight(1);
    fill(this.color);
    ellipse(0, 0, this.size, this.size);
    ellipse(- this.size, 0, this.size, this.size);
    line(0, 0, this.size, - this.size);
    line(0, 0, this.size, this.size);
    popMatrix();
};

// SETUP 

var ants = [];
var swarmSize = 30;
for (var i = 0; i < swarmSize; i++) {
    ants[i] = new Ant(random(1, 5), random(0.1, 0.75)); 
}

// ANIMATE 
var draw = function() {
background(mouseX, mouseY, mouseX);
for (var i = 0; i < ants.length; i++) {
ants[i].update();
ants[i].checkEdges();
ants[i].display(); 
    }
};   



