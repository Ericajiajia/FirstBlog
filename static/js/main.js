var button1 = $('.button1')
var button2 = $('.button2')
var menuUser = $('.menu-user')[0]
var photosLogo = $('.photos-logo')[0]
var articlesLogo = $('.articles-logo')[0]
var photo = $('.photo')
var floatTop = $('.float-top')
var floatBottom = $('.float-bottom')
var photosArr = [], photoIndex = []

// 封装产生没有重复的随机数的函数
var randNoRepeat = function (arr, photoIndex, len) {
  index = []
  for (var i = 0; i < len; i++) {
    let _i = i
    let indexNum = Math.floor(Math.random() * arr.length)
    while (photoIndex.toString().indexOf(indexNum) != -1) {
      indexNum = Math.floor(Math.random() * arr.length)
    }
    photoIndex[_i] = indexNum
  }
}
randNoRepeat (photos, photoIndex, 6)
// 随机分配首页的展示图片
for (var i = 0; i < photoIndex.length; i ++) {
  let _i = i
  photosArr[_i] = 'url(../static/' + photos[photoIndex[_i]].src + ')'
  console.log(photosArr[_i])
  photo[_i].style.background = photosArr[_i]
  photo[_i].style.backgroundSize = '100% 100%'
  floatTop[_i].innerHTML = photos[photoIndex[_i]].title
  floatBottom[_i].innerHTML = photos[photoIndex[_i]].description
}
menuUser.addEventListener('click', function () {
  window.location.href = 'login.html'
})
// 文章按钮的链接
for (var i = 0; i < button1.length; i++) {
  let _i = i
  button1[_i].addEventListener('click', function () {
    window.location.href = 'article.html'
  })
  button2[_i].addEventListener('click', function () {
    window.location.href = 'articles.html'
  })
}
// 相片页面的logo动效
photosLogo.addEventListener('mouseover', function () {
  photosLogo.className = 'photos-logo animated tada infinite'
})
photosLogo.addEventListener('mouseout', function () {
  photosLogo.className = 'photos-logo'
})
photosLogo.addEventListener('click', function () {
  window.location.href = 'photos.html'
})
// 文章页面的logo动效
articlesLogo.addEventListener('mouseover', function () {
  articlesLogo.className = 'articles-logo animated tada infinite'
})
articlesLogo.addEventListener('mouseout', function () {
  articlesLogo.className = 'articles-logo'
})
articlesLogo.addEventListener('click', function () {
  window.location.href = 'articles.html'
})