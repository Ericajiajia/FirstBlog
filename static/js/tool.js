function $(str) {
  if (str.indexOf('#') === 0) return document.querySelector(str)
  else return document.querySelectorAll(str)
}