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

var placeholder = 'Write something'
var gMeme
let gStickers = [
    '<img class="sticker" src="img/stickers/1.png">',
    '<img class="sticker" src="img/stickers/2.png">',
    '<img class="sticker" src="img/stickers/3.png">',
    '<img class="sticker" src="img/stickers/4.jpg">',
    '<img class="sticker" src="img/stickers/6.png">'
]

function onGMeme() {
    gMeme = {
        selectedImgId: 1,
        selectedLineIdx: 0,
        lines: [createLine(placeholder)],
    }
    return gMeme
}
function createLine(txt) {
    return {
        txt: txt,
        pos: { x: 80, y: 30 },
        width: 500,
        fontSize: 20,
        font: 'Verdana',
        align: 'center',
        isSelected: false,
        color: 'black',
    }
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
    return gMeme
}

function getMeme() {
    return gMeme
}

function setLineTxt(txt) {
    createLine()
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
    return gMeme.lines[gMeme.selectedLineIdx]
}

function getSelectedLine() {
    return gMeme.lines[gMeme.selectedLineIdx]
}

function setFillColor(color, lineIdx = gMeme.selectedLineIdx) {
    gMeme.lines[lineIdx].color = color
}
function setFontSize(size, lineIdx = gMeme.selectedLineIdx) {
    gMeme.lines[lineIdx].fontSize = size
}
function changeFontSize(diff, lineIdx = gMeme.selectedLineIdx) {
    gMeme.lines[lineIdx].fontSize += diff
}

function setStrokeColor(color, lineIdx = gMeme.selectedLineIdx) {
    gMeme.lines[lineIdx].stroke = color
}

function switchLine() {
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx > gMeme.lines.length - 1) {
        gMeme.selectedLineIdx = 0
    }
    console.log(gMeme.selectedLineIdx, 'gMeme.selectedLineIdx');
    return gMeme.lines[gMeme.selectedLineIdx]
}
// console.log(gMeme.selectedLineIdx,'gMeme.selectedLineIdx22');
function setSelectedLine(lineIdx) {
    gMeme.selectedLineIdx = lineIdx
    return gMeme.lines[lineIdx]
}

function addLine(txt = placeholder) {
    var y = gMeme.lines[gMeme.lines.length - 1].pos.y + 80
    if (y >= gCanvas.height - gMeme.lines[gMeme.selectedLineIdx].fontSize)
        y = 80

    var line = {
        txt: txt,
        pos: { x: 150, y: 400 },
        width: 400,
        fontSize: 20,
        fontFamily: 'Arial',
        align: 'center',
        color: 'black'

    }
    gMeme.lines.push(line)
    gMeme.selectedLineIdx = gMeme.lines.length - 1

}
function getLineWidth(width, line = gMeme.lines[gMeme.selectedLineIdx]) {
    line.width = width
    return width
}

function moveLine(diff) {
    var currPos = gMeme.lines[gMeme.selectedLineIdx].pos.y
    var fontSize = gMeme.lines[gMeme.selectedLineIdx].fontSize
    if (
        (diff < 0 && currPos <= fontSize + 5) ||
        (diff > 0 && currPos >= gCanvas.height - fontSize / 2)
    ) {
        return
    }

    gMeme.lines[gMeme.selectedLineIdx].pos.y += diff

    return gMeme.lines[gMeme.selectedLineIdx]
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
function setFontFamily(fontFamily) {
    gMeme.lines[gMeme.selectedLineIdx].font = fontFamily
}
function getInitialTxt() {
    return placeholder
}
function getLineByIdx(lineIdx) {
    return gMeme.lines[lineIdx]
}
function getClickedLine({ x, y }) {
    var lineIdx = gMeme.lines.findIndex(line => {
        var lineArea = getLineArea(line)

        return (
            x >= lineArea.x &&
            x <= lineArea.x + lineArea.width &&
            y <= lineArea.y &&
            y >= lineArea.y - lineArea.height
        )
    })

    return lineIdx
}
function setLineDrag(isDrag) {
    gMeme.lines[gMeme.selectedLineIdx].isDrag = isDrag
}

function dragLine(dx, dy) {
    var line = getSelectedLine()

    line.pos.x += dx
    line.pos.y += dy
}
function saveMeme() {
    gMeme.dataImg = gCanvas.toDataURL('image/jpeg')
    gMeme.push(JSON.parse(JSON.stringify(gMeme)))

}
