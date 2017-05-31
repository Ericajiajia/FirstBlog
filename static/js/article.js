var container = document.getElementsByClassName('container')[0]
var commentBarImg = document.getElementsByClassName('comment-bar-img')[0]
var commentBarWord = document.getElementsByClassName('comment-bar-word')[0]
var commentArea = document.getElementsByClassName('comment-area')[0]
var commentButton = document.getElementsByClassName('comment-write-submit')[0]
var commentReadFavor = document.getElementsByClassName('comment-read-favor')
var commentReadWord = document.getElementsByClassName('comment-read-word')[0].getElementsByTagName('span')[0]
var contentName = document.getElementsByClassName('content-name')
var contentBody = document.getElementsByClassName('content-body')
var indexNum

// 对页面内容进行赋值
indexNum = 1
container.innerHTML = data[indexNum].content
commentReadWord.innerHTML = data[indexNum].commentsName.length
for (var i = 0; i < data[indexNum].commentsName.length; i++) {
  let _i = i
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
// 发表评论按钮的动画
commentButton.addEventListener('mouseover', function () {
  commentButton.className = 'comment-write-submit animated rubberBand hinge'
})
commentButton.addEventListener('mouseout', function () {
  commentButton.className = 'comment-write-submit'
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