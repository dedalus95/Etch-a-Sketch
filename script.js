
const btn = document.createElement('button');
const container = document.getElementById('container');




container.style.display = 'grid';
container.style.gridTemplateColumns = 'repeat(16, 1fr)';
container.style.gridTemplateRows = 'repeat(16, 1fr)';
container.style.width = '960px';
container.style.margin = 'auto';

btn.style.width = '200px';
btn.style.height = '80px';
btn.textContent = 'CLEAR GRID';
btn.style.color = 'pink';
btn.style.fontFamily = 'Times new roman';
btn.style.fontSize = '20px';
btn.style.background = 'black';
btn.style.margin = '50px';

container.before(btn);
let numberOfSquares;



function createDiv() {

    const div = document.createElement('div');
    
    
    div.style.background = 'pink';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.border = 'solid';
    div.style.borderColor = 'rgb(200,200,200)';
    div.addEventListener('mousemove', function() {
        div.style.background = 'black';
    });
    
    container.appendChild(div);
    }
    
    for (i = 0; i < 256; i++) {
            createDiv();
    }


    btn.addEventListener('click', function() {

        numberOfSquares = prompt('How many squares for side?');
    
        container.style.gridTemplateColumns = `repeat(${numberOfSquares}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${numberOfSquares}, 1fr)`;
    
    });






