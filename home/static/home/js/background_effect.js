const grid = document.getElementById('bg-grid');    // Grid element
const rows = 5;                                     // Number of rows in grid
const columns = 5;                                  // Number of columns in grid

let lastHovered = -1;                               // Last cell, that mouse was hovering on
let mouseDown = false;                              // True, if mouse is down
let lastHue = 0;                                    // Last cell's color
const prevDown = {};                                // Tracks last CellIndex, onto which mouse was down

// Setting listener for checkBox - if checked => cells will become rainbow coloured
const rainbowToggle = document.getElementById('rainbow-toggle');
window.rainbowMode = rainbowToggle.checked;
rainbowToggle.addEventListener('input', () => window.rainbowMode = rainbowToggle.checked);

const render = (event) => {

    // Getting mouse coordinates
    const x = event.clientX;
    const y = event.clientY;

    // Getting current row and column (the cell) on which mouse os hovering right now
    const row = Math.floor(y * rows / window.innerHeight);
    const column = Math.floor(x * columns / window.innerWidth);

    // Getting current cell's index in a grid
    let cellIndex = undefined;
    if (row < rows || column > columns) {
        cellIndex = row * rows + column;
    }
    else {
        cellIndex = -1;
    };
    
    // Getting cell-element, which mouse is hovering on
    const hovered = grid.children[cellIndex];
    if (cellIndex >= 0) {
        if (!prevDown[cellIndex] && (mouseDown || window.rainbowMode)) {
            const hue = (lastHue + 12 + Math.floor(Math.random() * 16)) % 360;
            hovered.style.setProperty('--click-bg', `hsl(${hue}deg, 100%, 50%, 0.5)`);
            lastHue = hue;
        };

        hovered.classList.add('hovered');
        hovered.classList.toggle('clicked', (mouseDown || window.rainbowMode));
        hovered.classList.toggle('hovered-fast-trans', !prevDown[cellIndex] && !(mouseDown || window.rainbowMode));
    };

    if (lastHovered >= 0 && lastHovered !== cellIndex) {
        grid.children[lastHovered].classList.remove('hovered', 'hovered-fast-trans', 'clicked');
        prevDown[lastHovered] = false;
    };

    lastHovered = cellIndex;
    prevDown[cellIndex] = mouseDown || window.rainbowMode;
};

document.addEventListener('mousemove', render, { capture: true, passive: true });
document.addEventListener('mouseleave', () => render({ clientX: -1, clientY: -1 }), { passive: true });
document.addEventListener('mousedown', (event) => { mouseDown = true; render(event) }, { capture: true, passive: true });
document.addEventListener('mouseup', (event) => { mouseDown = false; render(event) }, { capture: true, passive: true });
document.addEventListener('dragend', (event) => { mouseDown = false; render(event) }, { capture: true, passive: true });
