'use strict'

const gImgs = [
    { id: 1, url: 'img/meme-imgs/1.jpg', keywords: ['politics', 'men'] },
    { id: 2, url: 'img/meme-imgs/2.jpg', keywords: ['cute', 'animal', 'dogs'] },
    { id: 3, url: 'img/meme-imgs/3.jpg', keywords: ['cute', 'baby', 'dogs', 'animal'] },
    { id: 4, url: 'img/meme-imgs/4.jpg', keywords: ['cute', 'cat', 'animal'] },
    { id: 5, url: 'img/meme-imgs/5.jpg', keywords: ['cute', 'baby'] },
    { id: 6, url: 'img/meme-imgs/6.jpg', keywords: ['men', 'comic', 'funny'] },
    { id: 7, url: 'img/meme-imgs/7.jpg', keywords: ['cute', 'baby'] },
    { id: 8, url: 'img/meme-imgs/8.jpg', keywords: ['men', 'comic', 'funny'] },
    { id: 9, url: 'img/meme-imgs/9.jpg', keywords: ['cute', 'baby', 'smile'] },
    { id: 10, url: 'img/meme-imgs/10.jpg', keywords: ['politics', 'men', 'smile'] },
    { id: 11, url: 'img/meme-imgs/11.jpg', keywords: ['men'] },
    { id: 12, url: 'img/meme-imgs/12.jpg', keywords: ['men', 'actor'] },
    { id: 13, url: 'img/meme-imgs/13.jpg', keywords: ['men', 'actor'] },
    { id: 14, url: 'img/meme-imgs/14.jpg', keywords: ['men', 'actor'] },
    { id: 15, url: 'img/meme-imgs/15.jpg', keywords: ['men', 'actor'] },
    { id: 16, url: 'img/meme-imgs/16.jpg', keywords: ['men', 'funny'] },
    { id: 17, url: 'img/meme-imgs/17.jpg', keywords: ['men', 'politics'] },
    { id: 18, url: 'img/meme-imgs/18.jpg', keywords: ['robot', 'men', 'cartoon'] },
]
const gFilter = {
    txt: '',
    key: '',
}

function getImgs() {
    var imgs = gImgs
    if (gFilter.txt) {
        imgs = imgs.filter(img =>
            img.keywords.some(key => key.includes(gFilter.txt))
        )
    } return imgs
}


function getImg(imgId) {
    return gImgs.find(img => img.id === imgId) 
    
    
}


function setFilterByTxt(txt) {
    gFilter.txt = txt
}
