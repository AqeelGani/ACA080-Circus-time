class BaseClass {
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution': 0.8,
            'friction': 1.0,
            'density': 1.0,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage('sprites/base.png');
        Composite.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        imageMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}
