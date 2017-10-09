var guideUserHead = $('.guide-user-head')[0]
var parent = $('.guide-summary')[0]
var articleUl = $('.category-title ul')
var articleLi = $('.category-title ul li')
var containerArr = [$('.show-h5-note')[0], $('.show-css-note')[0], $('.show-js-note')[0], $('.show-alog-expert')[0], $('.show-alog-website')[0], $('.show-note-feeling')[0]]
articleLi[2].style.background = "rgba(200, 197, 197, 1)"
// 存储每类文章数量的数组
var containerArr_num = [0, 0, 0, 0, 0, 0]

$.ajax({
    url: '/articledata',
    type: 'GET'
})
.done(function(data) {
    console.log(data)
    data.result.forEach(function (item, index) {
      // 计算每块分类的文章数目
      containerArr_num[item.sort] ++
      if (item.title == '') {
        item.title = 'Article' + (item.index + 1)
      }
      if (item.summary == '') {
        item.summary = '本文暂无介绍'
      }
      containerArr[item.sort].insertAdjacentHTML('beforeend', '<div class="article-container"><div class="summary-container"><div class="show-summary">' + item.summary + '</div></div><div class="title-container"><p class="show-title">' + item.title + '</p><a href="#" data-index="' + item.index + '">More</a></div></div>')
    })

    console.log(containerArr_num)
    for (let i = 0; i < containerArr_num.length; i ++) {
      if (containerArr_num[i] === 0) {
        containerArr[i].insertAdjacentHTML('beforeend', '<div class="article-none">暂时没有文章更新，敬请期待~</div>')
      }
    }
})
.fail(function() {
    console.log("error")
})




//抽取相同函数
function turnArray (num, labeling, uling) {
  if(labeling[num].className.indexOf("0") !== -1) {
    labeling[num].className = "guide-label1"
      uling[num].style.display = "none"
  } else if (labeling[num].className.indexOf("1") !== -1) {
    labeling[num].className = "guide-label0"
    uling[num].style.display = "block"
  }
}
// 给分类绑定事件委托
parent.addEventListener('click', function (e) {
  var cateName
  var labeling = $(".guide-summary label")
  var uling = $(".guide-summary ul")

  if (e.target.nodeName === 'P' || e.target.parentNode.nodeName === 'P') {
    if (e.target.nodeName === 'P') {
    cateName = e.target.parentNode.dataset.name
    } else {
    cateName = e.target.parentNode.parentNode.dataset.name
    }
    switch (cateName) {
      case 'fe':
        turnArray (0, labeling, uling)
        break;
      case 'alog':
        turnArray (1, labeling, uling)
        break;
      case 'note':
        turnArray (2, labeling, uling)
        break;
      default:
        break;
    }
  }
})
// 给左侧栏分类添加样式转换
for (var i = 0; i < articleUl.length; i++){
  articleUl[i].addEventListener("click", function (e) {
    var childName
    let index = 0

    if (e.target.nodeName === "P") {
      childName = e.target.parentNode
        console.log(e.target.textContent)
      for (var j = 0; j < articleLi.length; j ++) {
        let _j = j
        articleLi[_j].style.background = ''
        containerArr[_j].style.display = 'none'
        if (e.target.textContent === articleLi[_j].getElementsByTagName('p')[0].innerHTML) {
          index = _j
          console.log(index)
        }
      }
      if (childName.style.background === ""){
        containerArr[index].style.display = 'flex'
        childName.style.background = "rgba(200, 197, 197, 1)"
      } else {
        childName.style.background = ""
      }
    }
  })
}
guideUserHead.addEventListener('click', function () {
  window.location.href = 'login.html'
})
