let elImages = document.querySelector('.js-images')

let elBigImg = document.querySelector('.js-img')
let elFirstImages = document.querySelector('.js-first-img')
let elSecondImages = document.querySelector('.js-second-img')
let elThreeImages = document.querySelector('.js-three-img')
let elFourImages = document.querySelector('.js-four-img')
    
let elForm = document.querySelector('.form-js')
let leftBtn = document.querySelector('.left-btn')
let numberBtn = document.querySelector('.num-btn')
let rightBtn = document.querySelector('.right-btn')
let firstNum = 1

let elOpenBtn = document.querySelector('.js-open-btn')
let elCloseBtn = document.querySelector('.js-close-btn')
let wrapperFather = document.querySelector('.js-close')

function changeImg(img){
    img.addEventListener('click', function() {
        elImages.src = img.src
    })
}

changeImg(elBigImg)
changeImg(elFirstImages)
changeImg(elSecondImages)
changeImg(elThreeImages)
changeImg(elFourImages)

// function handleSubmit(evt) {
//     evt.preventDefault()
    
// }

// elForm.addEventListener('submit', handleSubmit)

// function handleRightBtn () {
//     let handleNumber = numberBtn.textContent++

// }

// function handleLeftBtn () {

//     if ( numberBtn.textContent == firstNum) {
//         numberBtn.textContent == 1
//     }else {
//         numberBtn.textContent--
//     }
// }

// rightBtn.addEventListener('click', handleRightBtn)
// leftBtn.addEventListener('click', handleLeftBtn)

function handleOpenBtn () {
    wrapperFather.classList.toggle('open');
}

function handleCloseBtn () {
    wrapperFather.classList.remove('open')
}

elOpenBtn.addEventListener('click', handleOpenBtn)
elCloseBtn.addEventListener('click', handleCloseBtn)