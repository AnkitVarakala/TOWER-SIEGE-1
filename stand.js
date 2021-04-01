class Stand{
    constructor(x,y,width,height){
    var options = {
        isSatic: true
    }
    this.body = Bodies.rectangle(x,y,width,heigth,options);
    this.width = width;
    this.height = height;
    world.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        strokeWeight(2);
        fill("white");
        push();
        translate(this.body.postion.x,this.body.postion.y);
        rotate(angle)
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}