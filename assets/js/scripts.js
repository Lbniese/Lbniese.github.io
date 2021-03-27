// Grab Canvas
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

resize();

// last known position
var pos = {
    x: 0,
    y: 0
};

// Event Listeners
window.addEventListener("resize", resize);
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);

// position from mouse event
function setPosition(e) {
    pos.x = e.clientX;
    pos.y = e.clientY;
}

// resize canvas
function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

// draw()
function draw(e) {
    // title
    let isRunning = 0;
    if (isRunning == 0) {
        ctx.font = "30px Arial";
        ctx.textAlign = "start";
        ctx.fillText("Welcome to your new notepad. Press and hold left mouse button to draw something - Press right mouse button to clear canvas!",
            50, 50
        );
        ctx.textAlign = "end";
        isRunning = 1;
    }

    // clear canvas om right mouse button (mousebutton 3)
    $('#myCanvas').mousedown(function(e) {
        if (e.which == 3) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    })

    // mouse left button must be pressed
    if (e.buttons !== 1) return;

    ctx.beginPath(); // begin

    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#FF79B4";

    ctx.moveTo(pos.x, pos.y); // from
    setPosition(e);
    ctx.lineTo(pos.x, pos.y); // to

    ctx.stroke(); // draw it!
}