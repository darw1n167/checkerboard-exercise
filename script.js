// Your JS goes here
const body = document.body.classList.add('container')

function makeSquares ()  {
    const div = document.createElement('div');
    const body = document.getElementsByTagName('body');
    div.className = 'square';
    div.style.backgroundColor = 'red';
    div.style.border = 'black solid 1px';
    div.style.width = '11.1%';
    div.style.height = '11.1%';
    div.style.paddingBottom = '11.1%'
    div.style.float = 'left';
    document.body.appendChild(div);
    return div;
}

function createColumn (num)  {
    for (let i = 0; i < num; i++)  {
        if (i % 2 === 0) {
        makeSquares();
        } else {
            makeSquares().style.backgroundColor = 'black';
        }
    }
}
console.log(makeSquares())
createColumn(55);
