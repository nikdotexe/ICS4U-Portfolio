var xPos = -30;
var yPos = 360;
var xPos2 = 10;
var yPos2 = 10;
noStroke();
draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    ellipse(xPos2, yPos2, 10, 10);
   fill(56, 56, 56);
   ellipse(-88,372,40,40);
    rect(-90,354,64,20);
  
    rotate(-16);
    xPos+=4;
    xPos2+=2;
    yPos2+=2;
    };



