var editor = document.getElementById('editor');
MarkdownIME.Enhance(editor);

//optional: enable Tex Formula support
var math = new MarkdownIME.Addon.MathAddon();
MarkdownIME.Renderer.inlineRenderer.addRule(math);