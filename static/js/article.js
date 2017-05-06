var parent = $('.guide-summary')[0]

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

  if (e.target.nodeName === 'P') {
    cateName = e.target.parentNode.dataset.name
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

