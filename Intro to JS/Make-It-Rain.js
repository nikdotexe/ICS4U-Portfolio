var xPositions = [10,30,50,60,80,100,120,200,250,295,335,380];
var yPositions = [80,80,80,80,80,80,5,25,45,65,85,80];

draw = function() {
background(204, 247, 255);
for (var i = 0; i < xPositions.length; i++) {
noStroke();
fill(0, 200, 255);
ellipse(xPositions[i], yPositions[i], 10, 10);
yPositions[i] += random(1,10);
rect(xPositions[i], yPositions[i], 10, 10);
yPositions[i] += random(1,10);
if (yPositions[i]>400){
yPositions[i]=0;
}
}
};
var mouseClicked = function(){
xPositions.push(random(0,400));
yPositions.push(random(0,400));
};
