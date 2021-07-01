
const btn = document.createElement('button');
const container = document.getElementById('container');
const btnReload = document.createElement('button');





container.style.display = 'grid';
// container.style.gridTemplateColumns = 'repeat(16, 1fr)';
// container.style.gridTemplateRows = 'repeat(16, 1fr)';
container.style.width = '605px';
container.style.height = '605px';
container.style.border = 'groove';
container.style.gap = '-30px';

btn.style.width = '200px';
btn.style.height = '80px';
btn.textContent = 'Set number of squares';
btn.style.color = 'pink';
btn.style.fontFamily = 'Times new roman';
btn.style.fontSize = '20px';
btn.style.background = 'black';
btn.style.margin = 'auto';

btnReload.style.width = '200px';
btnReload.textContent = 'CLEAR GRID';
btnReload.style.height = '80px';
btnReload.style.color = 'pink';
btnReload.style.fontFamily = 'Times new roman';
btnReload.style.fontSize = '20px';
btnReload.style.background = 'black';
btnReload.style.margin = 'auto';

container.before(btn);
container.before(btnReload)
let numberOfSquares;

// create a grid from scratch



   
    
    



function createDiv() {

    const div = document.createElement('div');
    
    
    div.style.background = 'pink';
    div.style.width = '300px';
    div.style.height = '300px';
    div.style.border = 'solid';
    div.style.borderColor = 'rgb(200,200,200)';
  

    div.addEventListener('mousemove', function(colors) {
         colors =  MouseEvent.clientX;
        div.style.background = `rgb(24,143,243)`;
    });
    
    container.appendChild(div);

    
    }
   

    numberOfSquares = prompt('How many squares for side?');

    container.style.gridTemplateColumns = `repeat(${numberOfSquares}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numberOfSquares}, 1fr)`;

        

        numberOfSquares = prompt('How many squares for side (max: 100)?');

        if (numberOfSquares > 100) {
            alert('invalid choice');
            return false;
        }
    
        container.style.gridTemplateColumns = `repeat(${numberOfSquares}, minmax(1px, 300px))`;
        container.style.gridTemplateRows = `repeat(${numberOfSquares}, minmax(1px, 300px))`;

        

        for (i = 0; i < numberOfSquares*numberOfSquares; i++) {
            createDiv();

        }

    

    function refreshPage() {
        window.location.reload()
    }

    btnReload.addEventListener('click', refreshPage);






