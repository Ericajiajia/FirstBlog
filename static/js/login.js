var imgs = $(".imgs")[0]
var imglis = $(".imgs li")
var order = $(".order")[0]
var orderlis = $(".order li")
var num = 0
var interval
var submit = $(".submit")[0]
var user-name, password

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

// 给提交按钮绑定事件
submit.addEventListener("click", function () {
  user-name = $(".input-box")[0].value
  password = $(".input-box")[1].value
  if (user-name === "Ericajiajia" && password === "sherhooo"){
    window.open("private.html", '_blank')
  } else {
    alert("你没有权限访问私人页面，请联系Jiajia！")
  }
})