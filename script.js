// Your JS goes here


function makeSquares ()  {
    const div = document.createElement('div');
    const body = document.getElementsByTagName('body');
    div.style.backgroundColor = 'black';
    div.style.width = '11.1%';
    div.style.height = '11.1%';
    div.style.paddingBottom = '11.1%'
    div.style.float = 'left';
    document.body.appendChild(div);
    return div;
}

function createBoard (num)  {
    for (let i = 1; i < num; i++)  {
        if (i % 2 === 0) {
        makeSquares();
        } else {
            makeSquares().style.backgroundColor = 'red';
        }
    }
}
console.log(makeSquares())
createBoard(108)
document.getElementById


