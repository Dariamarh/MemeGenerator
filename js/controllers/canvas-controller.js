'use strict'

const gTouchEvs = ['touchstart', 'touchmove', 'touchend']
var gStartPosition
var gCanvas
var gCtx

function renderCanvas() {
    gCanvas = document.querySelector('.canvas')
    gCtx = gCanvas.getContext('2d')
    renderMeme()

    window.addEventListener('resize', resizeCanvas)
    addMouseListeners()
    addTouchListeners()
}

function drawImg(img) {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
}


function drawText(line) {
    var text = line.txt
    gCtx.lineWidth = 0.8
    var { x, y } = line.pos
    gCtx.fillStyle = line.color
    gCtx.strokeStyle = line.stroke
    gCtx.font = `${line.weight} ${line.fontSize}px ${line.font}`
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
    getLineWidth(calcualteTextWidth(line), line)
}


function calcualteTextWidth(line) {
    gCtx.font = `${line.fontSize}px ${line.font}`
    const metrics = gCtx.measureText(line.txt)
    const width =
        Math.abs(metrics.actualBoundingBoxLeft) +
        Math.abs(metrics.actualBoundingBoxRight)

    return width
}

function drawSelectedRect(line) {
    var area = getLineArea(line)
    gCtx.lineWidth = 1
    gCtx.strokeStyle = '#f8f9fa'
    gCtx.strokeRect(
        area.x - 5,
        area.y - area.height + 5,
        area.width,
        area.height
    )
    gCtx.stroke()
}


function onDown(ev) {
    var pos = getEvPos(ev)
    var lineIdx = getClickedLine(pos)
    if (lineIdx === -1) return
    setSelectedLine(lineIdx)
    var line = getLineByIdx(lineIdx)
    updateInputVal(line)
    renderMeme()
    setLineDrag(true)
    gStartPosition = pos
    document.body.style.cursor = 'grabbing'
}
function onUp() {
    setLineDrag(false)
    document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
    var line = getSelectedLine()
    if (!line.isDrag) return
    var pos = getEvPos(ev)
    var dx = pos.x - gStartPosition.x
    var dy = pos.y - gStartPosition.y
    dragLine(dx, dy)
    gStartPosition = pos
    renderMeme()
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container')
    gCanvas.width = elContainer.offsetWidth
    gCanvas.height = elContainer.offsetHeight
    renderMeme()
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY,
    }
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        }
    }
    return pos
}

function renderInlineInput(line) {
    const elContainer = document.querySelector('.canvas-input')
    elContainer.style.top = line.pos.y - line.fontSize - 2 + 'px'
    elContainer.style.left = line.pos.x - 3 + 'px'
    const strHTML = `<input value="${line.txt}" oninput="onSetTextInline(this.value)" style="color: ${line.color}; font-size: ${line.fontSize}px; font-family: ${line.font};" class="edit-input" />`
    elContainer.innerHTML = strHTML
}

function addMouseListeners() {
    gCanvas.addEventListener('mousemove', onMove)
    gCanvas.addEventListener('mousedown', onDown)
    gCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gCanvas.addEventListener('touchmove', onMove)
    gCanvas.addEventListener('touchstart', onDown)
    gCanvas.addEventListener('touchend', onUp)
}

