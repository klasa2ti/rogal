class Ball {
    constructor(w, h, c, s, ctx) {
        this.width = w;
        this.height = h;
        this.color = c;
        this.c = ctx;
        this.vx = undefined;
        this.vy = undefined;
        this.pivotPoint = {
            x: this.width / 2,
            y: this.height / 2
        };
        this.speed = s;
        this.bounce = new Audio("NFF-bounce.wav");
    }

    draw() {
        this.c.beginPath();
        this.c.fillStyle = this.color;
        this.c.rect(this.x - this.pivotPoint.x, this.y - this.pivotPoint.y, this.width, this.height);
        this.c.fill();
    }
    start(x, y) {
        this.maxWidth = canvas.width;
        this.maxHeight = canvas.height;
        this.vy = Math.floor(Math.random() * 3) + 1;
        this.vx = Math.floor(Math.random() * 3) + 1;
        this.x = x;
        this.y = y;
        this.bounce.volume = 0.1;
    }
    collide(left, right) {
        //left side
        if (this.x - this.pivotPoint.x < left.x + left.pivotPoint.x) {
            if (this.y + this.pivotPoint.y < left.y - left.pivotPoint.y || this.y - this.pivotPoint.y > left.y + left.pivotPoint.y) {
                //stop game
                gameover = true;

            } else {
                // play sound https://www.noiseforfun.com/2012-sound-effects/bounce/
                this.bounce.play();
                this.vx = -this.vx;
                this.speed += 0.25;
                points++;
            }
        }
        //right side
        else if (this.x + this.pivotPoint.x > right.x - right.pivotPoint.x) {
            if (this.y + this.pivotPoint.y < right.y - right.pivotPoint.y || this.y - this.pivotPoint.y > right.y + right.pivotPoint.y) {
                //stop game
                gameover = true;
            } else {
                // play sound https://www.noiseforfun.com/2012-sound-effects/bounce/
                this.bounce.play();
                this.vx = -this.vx;
                this.speed += 0.25;
                points++;
            }
        }

    }
    update() {
        //move
        this.x += this.vx * this.speed;
        this.y += this.vy * this.speed;
        if (this.y + this.pivotPoint.y > this.maxHeight || this.y - this.pivotPoint.y < 0) {
            this.vy = -this.vy;
        }

        //draw
        this.draw();
    }
}