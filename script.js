let preview = document.querySelector('#preview');

// Ace options
let editor = ace.edit('editor');
editor.on('change', e => {
    document.querySelector('#preview').innerHTML = marked.parse(editor.getValue());
    localStorage.setItem('markdown', editor.getValue());
});

// Marked options
marked.setOptions({gfm: true});

// Initial settings
editor.setValue(localStorage.getItem('markdown') !== null ? localStorage.getItem('markdown') : example, -1);
preview.innerHTML = marked.parse(editor.getValue());

// Buttons
let copy = document.querySelector('#copy');
copy.addEventListener('click', () => {
    navigator.clipboard.writeText(marked.parse(editor.getValue()));
});