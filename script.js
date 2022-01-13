// Ace
let editor = ace.edit('editor');

// Buttons
let copy = document.querySelector('#copy');
let github = document.querySelector('#github');

copy.addEventListener('click', () => {
    console.log('copy to clipboard');
});

github.addEventListener('click', () => {
    console.log('open github repo');
});