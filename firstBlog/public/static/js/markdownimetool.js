var editor = document.getElementById('editor');
var backButton = $('.back-button')[0]
MarkdownIME.Enhance(editor);

//optional: enable Tex Formula support
var math = new MarkdownIME.Addon.MathAddon();
MarkdownIME.Renderer.inlineRenderer.addRule(math);
backButton.addEventListener('click', function () {
  window.location.replace('index.html')
})