'use strict'


renderGallery()
function renderGallery() {
    var imgs = getImgs()

    const strHTMLs = imgs.map(
        img => `<article class="gallery-img" onclick="onSelectImg(${img.id})">
              <img src="${img.url}"  alt="" />
            </article> `
    )
    document.querySelector('.gallery-imgs').innerHTML = strHTMLs.join('')
}

function onLoadGallery() {
    document.querySelector('.gallery').style.display = 'flex'
}

function onSelectImg(imgId) {
    setImg(imgId)
    document.querySelector('.gallery').style.display = 'none'

}

