const canvas = document.querySelector("#canvas")
const ChangeResButton = document.querySelector("#btnreschange");

ChangeResButton.addEventListener("click", () => {
    let newRes = 101;
    while (newRes > 100 || newRes < 0) {
        newRes = window.prompt("Type the pixel resolution(1-100): ");
    }
    createCanvas(newRes);
});

let mouseDown = 0;

document.body.addEventListener('mousedown', (event) => {
    event.preventDefault();
    mouseDown = !mouseDown;
});

document.body.addEventListener('mouseup', (event) => {
    mouseDown = !mouseDown;
});


createCanvas(16);

function createCanvas(resolution) {
    const allPixels = document.querySelectorAll(".square-pixel");
    allPixels.forEach(pixel => {
        pixel.remove();
    })
    for (let i = 0; i < resolution * resolution; i++) {
        const squarePixel = document.createElement("div");
        squarePixel.className = "square-pixel";
        let squareSize = String(480 / resolution);
        squarePixel.draggable = false;
        squarePixel.style = `width: ${squareSize}px; height: ${squareSize}px;`;
        squarePixel.addEventListener("mousemove", () => {
            if (mouseDown == true) {
                squarePixel.style.backgroundColor = "black";
            }
        });
        //squarePixel.textContent  = i;
        canvas.appendChild(squarePixel);
    }
}