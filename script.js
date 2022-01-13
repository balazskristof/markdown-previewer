let preview = document.querySelector('#preview');
let example = `# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

This is a paragraph.
*This text is italicized.*
**This is bold text.**
***This text combines both.***
~~This text is struckthrough.~~

> This is a quote.

Use the command \`git clone https://github.com/balazskristof/markdown-previewer\` to clone this repo.

This project was created with:
 - [Ace](https://ace.c9.io/)
 - [Marked](https://marked.js.org/)
 - [github-markdown-css](https://github.com/sindresorhus/github-markdown-css)
 - [Bootstrap Icons](https://icons.getbootstrap.com/)`;

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