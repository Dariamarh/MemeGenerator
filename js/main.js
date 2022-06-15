'use strict'

let gCanvas
let gCtx

function init() {
  gCanvas = document.querySelector('.canvas')
  gCtx = gCanvas.getContext('2d')
  onLoadGallery()
  renderGallery()
}
