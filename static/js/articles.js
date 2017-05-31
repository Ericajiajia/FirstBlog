var parent = $('.guide-summary')[0]
var articleUl = $('.category-title ul')
var articleLi = $('.category-title ul li')
var showSummary = $('.show-summary')
var showTitle = $('.show-title')
articleLi[2].style.background = "rgba(200, 197, 197, 1)"

// 给文章块赋值
for (var i = 0; i < data.length; i++) {
  let _i = i
  showSummary[_i].innerHTML = data[_i].summary
  showTitle[_i].innerHTML = data[_i].title
}
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
    console.log(cateName)
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

    if (e.target.nodeName === "P") {
      childName = e.target.parentNode
      for (var j = 0; j < articleLi.length; j++) {
        articleLi[j].style.background = ""
      }
      if (childName.style.background === ""){
        childName.style.background = "rgba(200, 197, 197, 1)"
      } else {
        childName.style.background = ""
      }
    }
  })
}

