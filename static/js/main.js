var button1 = $('.button1')
var button2 = $('.button2')

for (var i = 0; i < button1.length; i++) {
  let _i = i
  button1[_i].addEventListener('click', function () {
    window.location.replace('article.html')
  })
  button2[_i].addEventListener('click', function () {
    window.location.replace('articles.html')
  })
}