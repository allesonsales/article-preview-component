const sharebtn = document.getElementById ('sharebtn')
const shareArea = document.getElementById ('shareArea')
const mobileShare = document.getElementById ('mobile-share-area')
const triangle = document.getElementById ('triangle')

sharebtn.addEventListener ('click', (e) => {
    shareArea.classList.toggle ('hidden')
    triangle.classList.toggle ('hidden')
    mobileShare.classList.toggle ('hidden')
})
