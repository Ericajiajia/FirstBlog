var imgs = $(".imgs")[0]
var imglis = $(".imgs li")
var order = $(".order")[0]
var orderlis = $(".order li")
var num = 0
var interval
var button = $(".button")[0]
var userName, password

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
button.addEventListener("click", function () {
  userName = $(".input-box")[0].value
  password = $(".input-box")[1].value
  if (userName.toLowerCase() === "ericajiajia" && password.toLowerCase() === "sherhooo"){
    window.location.href = 'markdownmd.html'
  } else {
    alert("你没有权限访问私人页面，请联系Jiajia！")
  }
})