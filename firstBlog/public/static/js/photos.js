var guideUserImg = $('.guide-user-img')[0]
var guideBlog = $('.guide-blog')[0]
var guideArticles = $('.guide-articles')[0]
var picBox = $('.picture-box')
var coverPage = $('.cover-page')[0]
var coverBack = $('.cover-back')[0]
var showingPicture = $('.showing-picture')[0]
var showingNumber = $('.showing-number')[0]
var showingWord = $('.showing-word')[0]
var closeP = $('.close p')[0]
var guidePicture = $('.guide-picture')
var showingLeftArrow = $('.showing-left-arrow')[0]
var showingRightArrow = $('.showing-right-arrow')[0]
var guideLeftArrow = $('.guide-left-arrow')[0]
var guideRightArrow = $('.guide-right-arrow')[0]
var guidePics = $('.guide-pics')[0]
var index = 0

// 封装显示图片的函数
var showingFunc = function (i) {
    showingPicture.src = '../static/' + photos[i].src
    showingNumber.innerHTML = i + 1 + '/11'
    showingWord.innerHTML = photos[i].title
    for (let j = 0; j < guidePicture.length; j++) {
        guidePicture[j].className = 'guide-picture'
    }
    guidePicture[i].className = 'guide-picture guiding'
    if(i > 3) {
        guidePics.style.left = -40 - 151 * (i - 3) + 'px'
    }   else if (i < 4) {
        guidePics.style.left = -40 + 'px'
    }
}

// 给每个图片添加点击事件
for (let i = 0; i < picBox.length; i++) {
    picBox[i].addEventListener('click', function () {
        console.log(this)
        coverBack.style.display = 'block'
        coverPage.style.display = 'block'
        index = i
        showingFunc(index)
    })
    guidePicture[i].addEventListener('click', function () {
        console.log(i + 1 + '张图片')
        index = i
        showingFunc(index)
    })
}

// 给关闭按钮添加事件
closeP.addEventListener('click', function () {
    coverPage.style.display = 'none'
    coverBack.style.display = 'none'
})

// 给大图查看的左右箭头添加事件
showingLeftArrow.addEventListener('click', function () {
    index -= 1
    index = (index + photos.length) % photos.length
    showingFunc(index)
})
showingRightArrow.addEventListener('click', function () {
    index +=1
    index %= photos.length
    showingFunc(index)
})

// 悬浮框的链接
guideUserImg.addEventListener('click', function () {
  window.location.href = 'login.html'
})
guideBlog.addEventListener('click', function () {
  window.location.href = 'index.html'
})
guideArticles.addEventListener('click', function () {
  window.location.href = 'articles.html'
})

// 给图片总览区域的左右箭头添加事件
guideRightArrow.addEventListener('click', function () {
    if (guidePics.offsetLeft > -1095) {
        guidePics.style.left = guidePics.offsetLeft - 151 + 'px'
    }
    guideRightArrow.className = 'guide-right-arrow disabled'
    setTimeout(function () {
        guideRightArrow.className = 'guide-right-arrow'
    }, 400)
})
guideLeftArrow.addEventListener('click', function () {
    if (guidePics.offsetLeft < -190) {
        guidePics.style.left = guidePics.offsetLeft + 151 + 'px'
    }
    guideLeftArrow.className = 'guide-left-arrow disabled'
    setTimeout(function () {
        guideLeftArrow.className = 'guide-left-arrow'
    }, 400)
})