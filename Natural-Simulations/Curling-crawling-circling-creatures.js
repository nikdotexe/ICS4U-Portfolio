//ADAPTED FROM THE MANY WAVES CHALLENGE

angleMode = "radians";
//define creatures
var piceratops = getImage("avatars/piceratops-ultimate");
var leafers = getImage("avatars/leafers-ultimate");
var aqualine = getImage("avatars/aqualine-ultimate");
var duskpin = getImage("avatars/duskpin-ultimate");
var primosaur = getImage("avatars/primosaur-ultimate");
var starky = getImage("avatars/starky-ultimate");
var pause = false;

var Wave = function(amplitude, period, color, avatar) {
    this.startAngle = 0;
    this.amplitude = amplitude;
    this.period = period;
    this.color = color;
    this.angleVel = (TWO_PI / this.period) * 5;
    this.avatar = avatar;//so that we can incorporate avatar
};

Wave.prototype.update = function() {
    this.startAngle += TWO_PI / this.period;
};

Wave.prototype.draw = function() {
    var angle = this.startAngle;
    fill(this.color);
    //wave functino
    for(var x = 0; x <= width; x += 13){
        var y = this.amplitude * sin(angle);
        image(this.avatar, x, y+height/2, 68,68);
        angle += this.angleVel;//adds the velocity so they make a wave
    }
    
};

var wave = new Wave(400, 1009, color(255, 0, 0, 100),aqualine);
var wave2 = new Wave(350, 275, color(0, 0, 255, 100), piceratops);
var wave3 = new Wave(200,245, color(0, 0, 255, 100), duskpin);
var wave4 = new Wave(80, 200, color(255, 0, 0), leafers);
var wave5 = new Wave(300, 500, color(255, 0, 0), starky);
var wave6 = new Wave(500, 200, color(255, 0, 0), primosaur);

translate(0, height/5);

draw = function() {
    background(107, 107, 107);
   wave6.draw();
   wave.draw();
   wave2.draw();
    wave3.draw();
    wave4.draw();
    wave5.draw();
   if(pause===false){
        wave6.update();
        wave.update();
        wave2.update();
        wave3.update();
        wave4.update();
        wave5.update();
   }
   mouseClicked = function(){
        if(pause===false){
            pause = true;
        }
        else{
            pause = false;
        }
   };
};


