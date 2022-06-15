'use strict'

var gMemeBoard = document.querySelector('.meme-board')

function renderCanvas(id){
    gMemeBoard.style.display = 'flex'
    gGallery.style.display = 'none'
    renderMeme(id)
    
}

function renderMeme(id){
    var findImg = gImgs.find(img=> img.id ===id)
    var img= new Image()
    img.src = findImg.url
    img.onload = function(){
        gCtx.drawImage(img,0,0,gCanvas.width,gCanvas.height)
        getMeme(findImg)
        renderMemeTxt()
    }
    
}

function renderMemeTxt(){
    document.getElementById('top-txt').placeholder = gMeme.lines[0].txt
    for(var i = 0;i<gMeme.lines.length;i++){
        gCtx.font = `80px David`
    gCtx.fillText(gMeme.lines[i].txt,20,80)
    }
}