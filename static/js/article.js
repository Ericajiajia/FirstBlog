var guideUserImg = $('.guide-user-img')[0]
var guideBlog = $('.guide-blog')[0]
var guidePhotos = $('.guide-photos')[0]
var guideArticles = $('.guide-articles')[0]
var container = $('.container')[0]
var commentBarImg = $('.comment-bar-img')[0]
var commentBarWord = $('.comment-bar-word')[0]
var commentArea = $('.comment-area')[0]
var commentButton = $('.comment-write-submit')[0]
var commentReadFavor = $('.comment-read-favor')
var commentReadBlock = $('.comment-read-block')
var commentReadWord = $('.comment-read-word span')[0]
var contentName = $('.content-name')
var contentBody = $('.content-body')
var indexNum

// 对页面内容进行赋值
indexNum = 1
var commentNum = data[indexNum].commentsName.length
container.innerHTML = data[indexNum].content
commentReadWord.innerHTML = data[indexNum].commentsName.length
for (var i = 0; i < data[indexNum].commentsName.length; i++) {
  let _i = i
  commentReadBlock[_i].style.display = 'block'
  contentName[_i].getElementsByTagName('span')[0].innerHTML = data[indexNum].commentsName[_i]
  contentBody[_i].innerHTML = data[indexNum].commentsBody[_i]
}
// 整个评论区展开的功能实现
commentBarImg.addEventListener('click', function () {
  if (commentBarWord.style.display.indexOf('i') === -1) {
    commentBarWord.style.display = 'inline-block'
    commentArea.style.display = 'block'
  } else {
    commentBarWord.style.display = 'none'
    commentArea.style.display = 'none'
  }
})
// 悬浮框的链接
guideUserImg.addEventListener('click', function () {
  window.location.href = 'login.html'
})
guideBlog.addEventListener('click', function () {
  window.location.href = 'index.html'
})
guidePhotos.addEventListener('click', function () {
  window.location.href = 'photos.html'
})
guideArticles.addEventListener('click', function () {
  window.location.href = 'articles.html'
})
// 发表评论按钮的动画
commentButton.addEventListener('mouseover', function () {
  commentButton.className = 'comment-write-submit animated rubberBand hinger'
})
commentButton.addEventListener('mouseout', function () {
  commentButton.className = 'comment-write-submit'
})
commentButton.addEventListener('click', function () {
  let value = $('.comment-write-area')[0].value
  let name = $('.comment-write-name')[0].value
  if (value.length > 10 && value.length < 201) {
    commentReadBlock[commentNum].style.display = 'block'
    contentBody[commentNum].innerHTML = value
    if (name.length) {
      contentName[commentNum].getElementsByTagName('span')[0].innerHTML = name
    }
    commentNum ++
    commentReadWord.innerHTML = commentNum
    $('.comment-write-area')[0].value = ''
    $('.comment-write-name')[0].value = ''
  } else {
    alert('评论字数不符合要求，请修改！')
  }
})
// 对于点赞的功能实现
for (var i = 0; i < commentReadFavor.length; i++) {
  let _i = i
  commentReadFavor[_i].addEventListener('click', function () {
    if (commentReadFavor[_i].getElementsByTagName('i')[0].className.indexOf('o') != -1) {
      commentReadFavor[_i].className = 'comment-read-favor animated bounce'
      commentReadFavor[_i].getElementsByTagName('i')[0].className = "fa fa-heart fa-2x"
    } else  {
      commentReadFavor[_i].className = 'comment-read-favor'
      commentReadFavor[_i].getElementsByTagName('i')[0].className = "fa fa-heart-o fa-2x"
    }
  })
}