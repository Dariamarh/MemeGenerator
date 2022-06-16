'use strict'

const gTouchEvs = ['touchstart', 'touchmove', 'touchend']
var gStartPosition
var gCanvas
var gCtx

function renderCanvas() {
    gCanvas = document.querySelector('.canvas-container')
    gCtx = gCanvas.getContext('2d')
    gMemeBoard.style.display = 'flex'
    gGallery.style.display = 'none'
    renderMeme(id)
    window.addEventListener('resize', resizeCanvas)
    addMouseListeners()
    addTouchListeners()
}

function drawImg(img) {
    console.log(gCtx, 'gctx1');
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
}


function drawText(line) {
    var text = line.txt
    var { x, y } = line.pos
    gCtx.lineWidth = 0.2
    gCtx.fillStyle = line.color
    gCtx.strokeStyle = line.stroke
    gCtx.font = `${line.weight} ${line.fontSize}px ${line.font}`
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
    setLineWidth(calcualteTextWidth(text), line)
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

function onUp() {
    setLineDrag(false)
    document.body.style.cursor = 'grabbing'
}

// function resizeCanvas() {
//     var elContainer = document.querySelector('.canvas-container')
//     gCanvas.width = elContainer.offsetWidth
//     gCanvas.height = elContainer.offsetHeight
//     renderMeme()
// }

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
