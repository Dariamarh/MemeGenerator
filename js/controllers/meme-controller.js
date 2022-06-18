'use strict'

function renderMeme(ignoreSelected = false) {
    var meme = getMeme()
    var imgDraw = new Image()
    var img = getImg(meme.selectedImgId)
    imgDraw.src = img.url
    gCanvas.fillText = 'black'
    gCtx.restore()
    drawImg(imgDraw)
    meme.lines.forEach(line => drawText(line))
    if (!ignoreSelected) drawSelectedRect(meme.lines[meme.selectedLineIdx])
    gCtx.save()

}

function onSetTextLine(txt) {
    var line = setLineTxt(txt)
    getLineWidth(gCtx.measureText(line.txt).width)
    renderMeme()
}


function onSetTextInline(txt) {
    onSetTextLine(txt)
    var line = getSelectedLine()
    document.querySelector('.text-line').value = txt
    renderMeme()
}


function onChangeFillColor(color) {
    setFillColor(color)
    renderMeme()
}

function onChangeStrokeColor(color) {
    setStrokeColor(color)
    renderMeme()
}

function onChangeFontSize(diff) {
    var line = changeFontSize(diff)
    getLineWidth(calcualteTextWidth(gMeme.lines[gMeme.selectedLineIdx]))
    renderMeme()
}


function onSwitchTextLine() {
    var line = switchLine()
    updateInputVal(line)
    renderMeme()
}

function onMoveLine(diff) {
    moveLine(diff)
    renderMeme()
}

function onAddLine() {
    addLine()
    renderMeme()
}

function onRemoveLine() {
    removeLine()
    renderMeme()
}

function onSetTextAlign(align) {
    textAlign(align)
    renderMeme()
}

function onSetFontFamily(fontFamily) {
    setFontFamily(fontFamily)
    renderMeme()
}
function onSave() {
    saveMeme()
}
function updateInputVal(line) {
    var elInput = document.querySelector('.text-line')
    if (line.txt !== getInitialTxt()) {
        elInput.value = line.txt
    } else {
        elInput.value = ''
        elInput.setAttribute('placeholder', getInitialTxt())
        console.log(getInitialTxt());
    }
}
