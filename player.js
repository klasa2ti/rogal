class Player {
    constructor(w, h, c, ctx) {
        this.width = w;
        this.height = h;
        this.color = c;
        this.c = ctx;
        //this.c = document.querySelector("canvas").getContext("2d");
        this.pivotPoint = {
            x: this.width / 2,
            y: this.height / 2
        };
    }

    draw(fill = false) {
        this.c.beginPath();
        this.c.fillStyle = this.color;
        this.c.rect(this.x - this.pivotPoint.x, this.y - this.pivotPoint.y, this.width, this.height);
        this.c.fill();
    }

    jumpTo(x, y) {
        if (x - this.pivotPoint.x > 0 && x + this.pivotPoint.x < this.maxWidth &&
            y - this.pivotPoint.y > 0 && y + this.pivotPoint.y < this.maxHeight) {
            this.x = x;
            this.y = y;
        }
    }

    start(x, y) {
        this.maxWidth = canvas.width;
        this.maxHeight = canvas.height;
        this.x = x;
        this.y = y;
    }

    update() {
        this.draw();
    }
}