
const btn = document.createElement('button');
const container = document.getElementById('container');
const btnReload = document.createElement('button');





container.style.display = 'grid';
container.style.gridTemplateColumns = 'repeat(16, 1fr)';
container.style.gridTemplateRows = 'repeat(16, 1fr)';
container.style.width = '600px';
container.style.height = '600px';
container.style.margin = 'auto';
container.style.border = 'solid';

btn.style.width = '200px';
btn.style.height = '80px';
btn.textContent = 'Set number of squares';
btn.style.color = 'pink';
btn.style.fontFamily = 'Times new roman';
btn.style.fontSize = '20px';
btn.style.background = 'black';
btn.style.margin = '50px';

btnReload.style.width = '200px';
btnReload.textContent = 'CLEAR GRID';
btnReload.style.height = '80px';
btnReload.style.color = 'pink';
btnReload.style.fontFamily = 'Times new roman';
btnReload.style.fontSize = '20px';
btnReload.style.background = 'black';
btnReload.style.margin = '50px';

container.before(btn);
container.before(btnReload)
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
   
    


    btn.addEventListener('click', function() {

        

        numberOfSquares = prompt('How many squares for side (max: 100)?');

        if (numberOfSquares > 100) {
            alert('invalid choice');
            return false;
        }
    
        container.style.gridTemplateColumns = `repeat(${numberOfSquares}, minmax(5px, 1000px))`;
        container.style.gridTemplateRows = `repeat(${numberOfSquares}, minmax(5px, 1000px))`;

        

        for (i = 0; i < numberOfSquares*numberOfSquares; i++) {
            createDiv();

        }

    });

    function refreshPage() {
        window.location.reload()
    }

    btnReload.addEventListener('click', refreshPage);






