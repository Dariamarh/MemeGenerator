'use strict'

function renderGallery() {
    var imgs = getImgs()

    const strHTMLs = imgs.map(
        img => `<div class="gallery" onclick="onSelectImg(${img.id})">
              <img src="${img.url}"  alt="" />
            </div> `
    )
    document.querySelector('.gallery-imgs').innerHTML = strHTMLs.join('')
    document.querySelector('.canvas-container').style.display = "none"
    document.querySelector('.share-btns').style.display = "none"
 
}


function onSelectImg(imgId) {
    console.log(imgId,'id');
    setImg(imgId)
    console.log(imgId,'id1');
    document.querySelector('.gallery-imgs').style.display = 'none'
    document.querySelector('.canvas-container').style.display = 'flex'
    document.querySelector('.share-btns').style.display = "flex"
    document.querySelector('.content').style.display = "none"
    console.log(imgId,'id2');
    renderMeme()
    
    // resizeCanvas()
}

function onLoadGallery() {
    document.querySelector('.gallery-imgs').style.display = 'flex'
}

function onShowGallery() {
    document.querySelector('.gallery-imgs').style.display = 'flex'
    document.querySelector('.editor-container').style.display = 'none'
    initGMeme()
}

function onMemeSelect(memeIdx) {
    setMeme(memeIdx)
    document.querySelector('.editor-container').style.display = 'flex'
    renderMeme()
    resizeCanvas()
  }

  function onSetFilterText(txt) {
    setFilterByTxt(txt)
    renderGallery()
  }

  function onKeyClick(key) {
    increaseClickCount(key)
    document.querySelector('.search-keywords').value = key
    onSetFilterText(key)
    renderKey()
  }
  