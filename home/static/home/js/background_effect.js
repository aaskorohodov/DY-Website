const grid = document.getElementById('bg-grid')
const rows = 5
const columns = 5

let lastHovered = -1
let mouseDown = false
let lastHue = 0
const prevDown = {}

const render = (event) => {
    const [ x, y ] = [ event.clientX, event.clientY ]
    const row = Math.floor(y * rows / window.innerHeight)
    const column = Math.floor(x * columns / window.innerWidth)

    const cellIndex = row < rows || column > columns
        ? row * rows + column
        : -1
    const hovered = grid.children[cellIndex]

    if (cellIndex >= 0) {
        if (!prevDown[cellIndex] && (mouseDown || window.rainbowMode)) {
            const hue = (lastHue + 12 + Math.floor(Math.random() * 16)) % 360
            hovered.style.setProperty('--click-bg', `hsl(${hue}deg, 100%, 50%, 0.5)`)
            lastHue = hue
        }

        hovered.classList.add('hovered')
        hovered.classList.toggle('clicked', (mouseDown || window.rainbowMode))
        hovered.classList.toggle('hovered-fast-trans', !prevDown[cellIndex] && !(mouseDown || window.rainbowMode))
    }

    if (lastHovered >= 0 && lastHovered !== cellIndex) {
        grid.children[lastHovered].classList.remove('hovered', 'hovered-fast-trans', 'clicked')
        prevDown[lastHovered] = false
    }

    lastHovered = cellIndex
    prevDown[cellIndex] = mouseDown || window.rainbowMode
}

document.addEventListener('mousemove', render, { capture: true, passive: true })
document.addEventListener('mouseleave', () => render({ clientX: -1, clientY: -1 }), { passive: true })
document.addEventListener('mousedown', (event) => { mouseDown = true; render(event) }, { capture: true, passive: true })
document.addEventListener('mouseup', (event) => { mouseDown = false; render(event) }, { capture: true, passive: true })
document.addEventListener('dragend', (event) => { mouseDown = false; render(event) }, { capture: true, passive: true })
