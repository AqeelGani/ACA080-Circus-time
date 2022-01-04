class Apple extends BaseClass {
    constructor(x, y) {
        super(x, y, 50, 50);
        this.image = loadImage("./sprites/apple.png");
        this.visiblity = 255;
    }

    display() {
        if (this.body.speed < 2) {
            super.display();
        }
        else {
            Matter.World.remove(world, this.body);
            this.visiblity = this.visiblity - 5;
            push();
            tint(255, this.visiblity);
            image(this.image, this.body.position.x, this.body.position.y, 50, 50);
            pop();
        }
    }


}
