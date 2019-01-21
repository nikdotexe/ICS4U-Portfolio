background(89, 216, 255);

var makefish = function(){
var centerX = 200;
var centerY = 100;
var bodyLength = random(50, 600);
var bodyHeight = 74;
noStroke();
fill(random(255),random(255), random(255));
// body
ellipse(mouseX, mouseY, bodyLength, bodyHeight);
fill(random(255),random(255), random(255));
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(mouseX-bodyLength/2, mouseY,
         mouseX-bodyLength/2-tailWidth, mouseY-tailHeight,
         mouseX-bodyLength/2-tailWidth, mouseY+tailHeight);
         // eye
fill(random(255), random(255), random(255));
ellipse(mouseX+bodyLength/4,mouseY, bodyHeight/5, bodyHeight/5);  
};


var mouseClicked = function(){
draw = makefish();
};

