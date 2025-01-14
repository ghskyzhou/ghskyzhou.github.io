// Initialize CodeMirror editor
var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    mode: "markdown",
    lineNumbers: true,
    theme: "material"
});

// Initialize Showdown converter
var converter = new showdown.Converter();

// Update preview on editor input
editor.on("keyup", function() {
    var markdown = editor.getValue();
    document.getElementById("preview").innerHTML = converter.makeHtml(markdown);
});