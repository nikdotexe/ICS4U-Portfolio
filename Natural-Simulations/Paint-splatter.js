//defining the generator
var generator = new Random(1);

var draw = function() {
var standardDeviation = 20;
var mean = 200;
    var num = generator.nextGaussian(mean,standardDeviation);
        var x= (generator.nextGaussian() * standardDeviation) + mean;
        var y= (generator.nextGaussian() * standardDeviation) * mean;
    noStroke();
    fill(random(1,44), random(1,115), random(1,120));
    ellipse(x+1,random(20,600), random(50,150), random(50,100));
};
