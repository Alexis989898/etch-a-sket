const canvas = document.querySelector("#canvas")
const ChangeResButton = document.querySelector("#btnreschange");

ChangeResButton.addEventListener("click", () => {
    let newRes = 101;
    while(newRes > 100 || newRes < 0) {
        newRes = window.prompt("Type the pixel resolution(1-100): ");
    }
    createCanvas(newRes);
});

var mouseDown = 0;
document.body.onmousedown = function() { 
  ++mouseDown;
}
document.body.onmouseup = function() {
  --mouseDown;
}

createCanvas(16);

function createCanvas(resolution) {
    const allPixels = document.querySelectorAll(".square-pixel");
    allPixels.forEach(pixel => {
        pixel.remove();
    })
    for (let i = 0; i < resolution * resolution; i++) {
        const squarePixel = document.createElement("div");
        squarePixel.className = "square-pixel";
        let squareSize =  String(480 / resolution);
        squarePixel.draggable = false;
        squarePixel.style = `width: ${squareSize}px; height: ${squareSize}px;`;
        squarePixel.addEventListener("mousemove", () => {
            if(mouseDown == 1) {
                squarePixel.style.backgroundColor = "black";
            }
        });
        //squarePixel.textContent  = i;
        canvas.appendChild(squarePixel);
    }
}