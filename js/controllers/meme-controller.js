'use strict'



function renderMeme() {
    var meme = getMeme()
    var imgDraw = new Image()
    var img = getImg(meme.selectedImgId)
    imgDraw.src = img.url
  
    // drawImg(imgDraw)
}

function onSetTextLine(txt) {
    var line = setLineText(txt)
    setLineWidth(gCtx.measureText(line.txt).width)
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
    setLineWidth(gCtx.measureText(line.txt).width)
    renderMeme()
}
function onSwitchTextLine() {
    var line = switchSelectedLine()
    updateInputVal(line)
    renderMeme()
}

function onMoveLine(diff) {
    moveLine(diff)
    renderMeme()
}

function onAddLine() {
    var line = addLine()
    document.querySelector('.text-line')
    document.setAttribute('initialTxt', getInitialTxt())
    setLineWidth(gCtx.measureText(line.txt).width)
    renderMeme()
}

function onRemoveLine() {
    removeLine()
    renderMeme()
}

function onSetTextAlign(align) {
    setTextAlign(align)
    renderMeme()
}

function onSetFontFamily(fontFamily) {
    setFontFamily(fontFamily)
    renderMeme()
}

function updateInputVal(line) {
    var elInput = document.querySelector('.text-line')
    if (line.txt !== getInitialTxt()) {
        elInput.value = line.txt
    } else {
        elInput.value = ''
        elInput.setAttribute('initialTxt', getInitialTxt())
    }
}
