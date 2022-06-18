'use strict'

function shareImg() {
    const imgDataUrl = gCanvas.toDataURL('img/jpeg')
}
function downloadImg(elLink) {
    var imgContent = gCanvas.toDataURL('img/jpeg')
    elLink.href = imgContent
}

function shareImg() {
    const imgDataUrl = gCanvas.toDataURL('img/jpeg')
    function onSuccess(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        console.log(encodedUploadedImgUrl)
        document.querySelector(
            '.msg'
        ).innerText = `Your photo is available here: ${uploadedImgUrl}`
        document.querySelector('.btn-share').innerHTML = `
          <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
             Share   
          </a>`
    }
    doUploadImg(imgDataUrl, onSuccess)
}

function doUploadImg(imgDataUrl, onSuccess) {
    const formData = new FormData()
    formData.append('img', imgDataUrl)
    fetch('//ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData,
    })
        .then(res => res.text())
        .then(url => {
            onSuccess(url)
        })
        .catch(err => {
            console.error(err)
        })
}
