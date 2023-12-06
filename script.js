const canvas = document.querySelector("#canvas")
const ChangeResButton = document.querySelector("#btnreschange");
const RainbowModeButton = document.querySelector("#btnrainbowmode");

let rainbowmode = false;

RainbowModeButton.addEventListener("click", () => {
    if(rainbowmode == false) {
        rainbowmode = true;
        RainbowModeButton.style = "color: green;"
        console.log(rainbowmode);
    } else if(rainbowmode == true){
        rainbowmode = false;
        RainbowModeButton.style = "color: red;"
        console.log(rainbowmode);
    }
});

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
                if(rainbowmode == true) {
                    squarePixel.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
                } else {
                    squarePixel.style.backgroundColor = "black";
                }
            }
        });
        canvas.appendChild(squarePixel);
    }
}

createCanvas(16);