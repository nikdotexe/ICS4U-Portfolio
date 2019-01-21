background(122, 226, 255);
var xt =0;
var yt =0;
var drawRange = function() {
    var incAmount = 0.01;
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t);
        var y = map(n, 0, 1, 0, height/2);
        stroke(140, 135, 135);
        rect(t*100, height-y-24, 1, y); 
        
    }
};
var drawRange2 = function(){
    var incAmount = 0.01;
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t);
        var y = map(n, 0, 1, 0, height*2);
        stroke(77, 75, 75);
        rect(t*190-201, height-y/2, -1, y);
    }
};
var drawGrass = function() {
    var incAmount = 0.01;
    for (var t = 0; t < incAmount*width*110; t += incAmount) {
        var n = noise(t);
        var y = map(n, 0, 1, 0, height*2);
        stroke(98, 184, 27);
        rect(t*1, height-y/7.3, 0, y);
    }
};
var drawGrass2 = function() {
    var incAmount = 0.01;
    for (var t = 0; t < incAmount*width*110; t += incAmount) {
        var n = noise(t);
        var y = map(n, 0, 1, 0, height*2);
        stroke(40, 92, 0);
        rect(t*2, height-y/6.3, 0, y);
    }
};
var drawBird = function(){
    for (var i = 0; i < 5; i++){
        var randX = Math.floor(random(400));
        var randY = Math.floor(random(10, 250));
        stroke(0, 0, 0);
        noFill();
        arc(randX,randY,24,14,-193,18);
        arc(randX+23,randY,23,15,-200,18);
    }
  
    
};
    

drawRange2();
drawRange();
drawBird();
    //Sun
    strokeWeight(8);
    stroke(250, 222, 10);
    fill(242, 195, 9);
    ellipse(341,42,140,140);//Grass layer 1
    strokeWeight(1);
    drawGrass2();
    fill(40, 92, 0);
    rect(0,349,434,505);
    //Grass layer 
    fill(98, 184, 27);
    drawGrass();
    rect(0,355,417,525);
    //Field Ridge against the lake
    fill(40, 92, 0);
    ellipse(9,424,468,164);
    fill(255, 214, 133);
    ellipse(9,424,448,157);
    //Lake
    fill(0, 213, 255);
    ellipse(9,424,419,153);
    fill(75, 163, 179);
    ellipse(9,424,375,144);
 
