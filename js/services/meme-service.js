'use strict'


const memesSentences = [
    'I never eat falafel',
    'DOMS DOMS EVERYWHERE',
    'Stop Using i in for loops',
    'Armed in knowledge',
    'Js error "Unexpected String"',
    'One does not simply write js',
    'I`m a simple man i see vanilla JS, i click like!',
    'JS, HTML,CSS?? Even my momma can do that',
    'May the force be with you',
    'I know JS',
    'JS Where everything is made up and the rules dont matter',
    'Not sure if im good at programming or good at googling',
    'But if we could',
    'JS what is this?',
    'Write hello world , add to cv 7 years experienced',
]

var initialTxt = 'Write something'
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
        txt: initialTxt,
        pos: { x: 100, y:50 },
        size: 20,
        width:50,
        fontSize: 30,
        align: 'center',
        color: 'black'

    }]
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

function getMeme() {
    return gMeme
  }
  

function setLineText(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
    return gMeme.lines[gMeme.selectedLineIdx]
}

function getSelectedLine() {
    return gMeme.lines[gMeme.selectedLineIdx]
}

function setFillColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function changeFontSize(diff) {
    gMeme.lines[gMeme.selectedLineIdx].fontSize += diff
    return gMeme.lines[gMeme.selectedLineIdx]
}

function setStrokeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].stroke = color
}


function switchLine() {
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx >= gMeme.lines.length) {
        gMeme.selectedLineIdx = 0
    }
    return gMeme.lines[gMeme.selectedLineIdx]
}

function setSelectedLine(lineIdx) {
    gMeme.selectedLineIdx = lineIdx
    return gMeme.lines[gMeme.selectedLineIdx]
  }

function addLine() {
    var y = gMeme.lines[gMeme.lines.length - 1].pos.y + 30
    if (y >= gCanvas.height - gMeme.lines[gMeme.selectedLineIdx].fontSize)
        y = 30

    var line = {
        txt: txt,
        pos: { x: 5, y },
        size: 20,
        fontSize: 30,
        align: 'left',
        color: 'black'
    }
    gMeme.lines.push(line)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
    return line
}
function getLineWidth() {
    return gMeme.lines[gMeme.selectedLineIdx].width
}

function getLineArea(line) {
    var area = {
        x: line.pos.x,
        y: line.pos.y,
        width: line.width,
        height: line.fontSize + 5,
    }
    return area
}
function removeLine() {
    if (gMeme.lines.length === 1)
        return true
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
    return false
}

function textAlign(align) {
    gMeme.lines[gMeme.selectedLineIdx].align = align
    var line = gMeme.lines[gMeme.selectedLineIdx]
    switch (line.align) {
        case 'right':
            line.pos.x = 10
            break

        case 'center':
            line.pos.x = (gCanvas.width - line.width) / 2
            break

        case 'left':
            line.pos.x = gCanvas.width - 10 - line.width
            break
    }
}

function getInitialTxt() {
    return initialTxt
  }
  