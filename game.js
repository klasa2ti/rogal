//variables
const canvas = document.querySelector("canvas");
canvas.width = 600;
canvas.height = 300;
const ctx = canvas.getContext("2d");

const player = new Player(25, 100, "#fff", ctx);
const computer = new Player(25, 100, "#fff", ctx);
const ball = new Ball(10, 10, "#313131", 1, ctx);

let points = 0;
let gameover = false;

let mouse = {
    x: 0,
    y: 0,
}

//event listeners
window.addEventListener("keypress", key => {
    if (gameover == true && key.key == "Enter") {
        gameover = false;
        init();
        update();
        points = 0;
        ball.speed = 1;
    }
    console.log(key);

});
window.addEventListener("resize", () => {
    init();
});

window.addEventListener("mousemove", cursor => {
    mouse.x = cursor.x;
    mouse.y = cursor.y;
});

//functions

//init
function init() {
    player.start(30, 100);
    computer.start(canvas.width - 30, 100);
    ball.start(150, 150)
}

//update
function update() {
    if (gameover == false) {
        requestAnimationFrame(update);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    } else {
        //print "game over"
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "#fff";
        ctx.textAlign = "center";
        ctx.fillText("Game over press Enter to start", canvas.width / 2, canvas.height / 2);
    }

    //points
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.fillText(points, canvas.width / 2, canvas.height * 0.1);

    //ball
    ball.collide(player, computer);
    ball.update();

    //player
    player.jumpTo(30, mouse.y);
    player.update();

    //computer
    computer.jumpTo(canvas.width - 30, ball.y);
    computer.update();

}
init();
update();
