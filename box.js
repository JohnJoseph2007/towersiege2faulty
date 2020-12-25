class Boxes {
    constructor(x, y) {
        var options = {restitution:0.5, isStatic:false};
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        World.add(world, this.body);
        this.tintspeed = 255;
    }


    display() {
        var pos =this.body.position;

        if (pos.y >=  630) {
            World.remove(world, this.body);
            push();
            tint(255, this.tintspeed);
            this.tintspeed -=5;
            rect(pos.x, pos.y, 50, 50);
            pop();
        } else {
            rectMode(CENTER);
            fill("pink");
            rect(pos.x, pos.y, 50, 50);
        }
    }
}

        // if(this.body.speed < 2.5) {
        //     super.display();
        // } else {
        //     World.remove(wo, this.body);
        //     // for(var i=255; i<0; i-=0.005) {
        //     //     tint(i);
        //     //     image(this.image, pos.x, pos.y, 50, 50);
        //     // }
        //     push();
        //     tint(255, this.tintspeed);
        //     this.tintspeed -=5;
        //     image(this.image, pos.x, pos.y, 50, 50);
        //     pop();
        // }