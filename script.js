
const btn = document.createElement('button');
const container = document.getElementById('container');
const btnReload = document.createElement('button');
let hue = 0;
container.before(btn);
container.before(btnReload);



document.body.style.backgroundColor = '#00703C';
container.style.display = 'grid';
container.style.width = '700px';
container.style.height = '700px';
container.style.border = 'solid';
container.style.margin = '100px auto auto auto';
container.style.background = 'white';

btn.style.width = '200px';
btn.style.height = '80px';
btn.textContent = 'Set number of squares';
btn.style.color = '00703C';
btn.style.fontFamily = 'Sans serif';
btn.style.fontSize = '20px';
btn.style.background = 'white';
btn.style.margin = '50px';

btnReload.style.width = '200px';
btnReload.textContent = 'Clear grid';
btnReload.style.height = '80px';
btnReload.style.color = '00703C';
btnReload.style.fontFamily = 'Sans serif';
btnReload.style.fontSize = '20px';
btnReload.style.background = 'white';
btnReload.style.margin = '50px';


let numberOfSquares;



function createDiv() {

    const div = document.createElement('div');

    
    div.style.background = 'white';
    // div.style.width = '300px';
    // div.style.height = '300px';
    div.style.border = 'groove';
    div.style.borderColor = 'rgb(240,240,240)';
  

  

    div.addEventListener('mousemove', function(e) {
       
        div.style.background = `hsl(${hue}, 100%, 50%)`;
        hue++;
        if(hue > 360) {
            hue = 0;
        }
        console.log(hue);

    });
    
    container.appendChild(div);

    
}


        function askForSquares() { 

        numberOfSquares = prompt('How many squares for side (max: 100)?');

        if (numberOfSquares > 100) {
            alert('invalid choice');
            return false;
        }
        
    
  

    
        container.style.gridTemplateColumns = `repeat(${numberOfSquares}, minmax(0, 1fr))`;
        container.style.gridTemplateRows = `repeat(${numberOfSquares}, minmax(0, 1fr))`;
       
         for (i = 0; i < numberOfSquares*numberOfSquares; i++) {
                    createDiv();

                }
        if (numberOfSquares) {
            btn.disabled = true;
        }

    }

       
    

    function refreshPage() {
        window.location.reload()
    }



    btn.addEventListener('click', askForSquares);
    btnReload.addEventListener('click', refreshPage);







