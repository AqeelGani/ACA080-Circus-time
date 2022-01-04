class Slingshot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.08,
            length: 5
        }
        this.sling = Constraint.create(options);

        this.sling1 = loadImage("./sprites/archery.png");
        this.sling2 = loadImage("./sprites/sling2.png");
        Composite.add(world, this.sling);
    }

    fly() {
        this.sling.bodyA = null;
    }

    attach(body) {
        this.sling.bodyA = body;
    }

    display() {
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            push();
            stroke(42, 22, 8);
            if (pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling2, pointA.x - 20, pointA.y - 20, 15, 30);
            }
            else {
                strokeWeight(4);
                line(pointA.x + 25, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling2, pointA.x + 20, pointA.y - 20, 15, 30);
            }
            pop();
        }

        image(this.sling1, 40, 450);
    }
}
