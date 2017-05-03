var labeling = $('.guide-summary label');
var parent = $('.guide-summary')[0]

// 给分类绑定事件委托
parent.addEventListener('click', function (e) {
  var cateName

  if (e.target.className === 'category-title') {
    cateName = e.target.dataset.name
    switch (cateName) {
      case 'fe':
      case 'alog':
        break
      case 'note':
        break
      default:
        break
    }
  }
})

