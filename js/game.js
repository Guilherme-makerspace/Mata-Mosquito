var height = 0;
var width = 0;
var vida = 1; 
var time = 15;

function adjustSizeOfGame(){
    height = window.innerHeight;
    width = window.innerWidth;
    console.log(height, width);    
}

adjustSizeOfGame();

function positionRandom(){
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();
        if(vida > 3){
            //game over
            window.location.href = 'gameover.html';
        } else {
            document.getElementById('v' + vida).src = "img/coracao_vazio.png";
            vida++;
        }
    }
    
    var positionX = Math.floor(Math.random() * width) -120;
    var positionY = Math.floor(Math.random() * height) -120;
    positionX = positionX < 0 ? 0: positionX;


    console.log(positionX, positionY);

    //Create HTML element

    var mosquito = document.createElement('img');
    mosquito.src = 'img/mosquito.png';
    mosquito.className = randomSize() +' '+ randomSide();
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id='mosquito';
    document.body.appendChild(mosquito);

    // Kill Mosquito

    mosquito.onclick = function (){
        this.remove();
    }
}

function randomSize(){
    var type = Math.floor(Math.random() * 5)
    switch(type){
        case 0: 
            return 'mosquito';
        case 1: 
            return 'mosquito1';
        case 2: 
            return 'mosquito2';
        case 3: 
            return 'mosquito3';
        case 4: 
            return 'mosquito4';

    }
}

function randomSide(){
    var type = Math.floor(Math.random() * 2)
    switch(type){
        case 0: 
            return 'sideB';
        case 1: 
            return 'sideA';
    }
}

var cronometer = setInterval(function(){
    time -= 1;
    if(time < 0 ){
        window.location.href = 'win.html';
    } else{
        document.getElementById('cronometer').innerHTML = time;
    }
},1000);