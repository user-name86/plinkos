class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.2
        }
        
        this.body = Bodies.circle(x, y,r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        this.r=r;
        this.x=x;
        this.y=y;
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

}