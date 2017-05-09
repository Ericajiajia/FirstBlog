var imgs = $(".imgs")[0]
var imglis = $(".imgs li")
var order = $(".order")[0]
var orderlis = $(".order li")
var num = 0
var interval
var submit = $(".submit")[0]
var inputValue0, inputValue1

// 让当前图片及时显现
var play = function (num) {
  for (var i = 0; i < imglis.length; i++){
    imglis[i].className = ''
    orderlis[i].className = ''
  }
  imglis[num].className = 'on'
  orderlis[num].className = 'on'
}
// 让图片自动播放
var autoplay = function () {
  interval = setInterval (function () {
    num++
    num = num % 5
    play (num)
  }, 3000)
}
autoplay()
// 给每个小按钮绑定鼠标事件
for (var j = 0; j < orderlis.length; j++){
  orderlis[j].addEventListener("mouseover", function () {
    num = this.dataset.index
    play (num)
    clearInterval (interval)
  })
  orderlis[j].addEventListener("mouseout", function () {
    autoplay ()
  })
}
// 给提交按钮绑定事件
submit.addEventListener("click", function () {
  inputValue0 = $(".input-box")[0].value
  inputValue1 = $(".input-box")[1].value
  if (inputValue0 === "Ericajiajia" && inputValue1 === "sherhooo"){
    window.open("private.html", '_blank')
  } else {
    alert("你没有权限访问私人页面，请联系Jiajia！")
  }
})