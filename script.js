
const btn = document.getElementById('button-set-squares');
const container = document.getElementById('container');
const btnReload = document.getElementById('button-clear');
let hue = 0;




document.body.style.backgroundColor = '#00703C';



let numberOfSquares;



function createDiv() {

    const div = document.createElement('div');

    
    div.style.background = 'white';
    
    div.style.border = 'groove';
    div.style.borderWidth = '1px';
    div.style.borderColor = 'rgb(250,250,250)';
  

  

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







