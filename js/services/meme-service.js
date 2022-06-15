'use strict'

var gMeme = {
    selecterId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: 'Enter text here',
        size: 20,
        align: 'left',
        color: 'red,'
    }]
}

function setCurrMeme(img) {
    gMeme.selectedId = img.id
}

function setLineText(txt){
    gMeme.lines[0].txt = txt
    renderMemeTxt()
}

function getMeme(img){
    gMeme.selectedId = img.id
}