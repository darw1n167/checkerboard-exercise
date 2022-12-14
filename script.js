// Your JS goes here
const body = document.body.classList.add('container')

function makeSquares ()  {
    const div = document.createElement('div');
    const body = document.getElementsByTagName('body');
    div.className = 'square';
    div.style.backgroundColor = 'red';
    div.style.border = 'black solid 1px';
    div.style.width = '100px';
    div.style.height = '100px';
    document.body.appendChild(div);
}

function createRow (num)  {
    for (let i = 0; i < num; i++)  {
        makeSquares();
    }
}

createRow(50);
