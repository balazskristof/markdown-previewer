// Marked
marked.setOptions({gfm: true});

// Ace
let editor = ace.edit('editor');
editor.on('change', e => {
    document.querySelector('#preview').innerHTML = marked.parse(editor.getValue());
});

// Buttons
let copy = document.querySelector('#copy');
let github = document.querySelector('#github');
copy.addEventListener('click', () => {
    navigator.clipboard.writeText(marked.parse(editor.getValue()));
});
github.addEventListener('click', () => {
    window.open('https://github.com/balazskristof/markdown-previewer', '_blank');
});