// SELECTORS
const $time  = document.querySelector('#time');
const $result = document.querySelector('#result');
const $game = document.querySelector('#game');
const $start = document.querySelector('#start');
const $changeTime = document.querySelector('#change-time');

const colors = ['red', 'green', 'blue', 'orange', 'purple', 'pink', 'brown', 'yellow'];
let score = 0;


// EVENTS
$start.addEventListener('click', startGameFunc);
$game.addEventListener('click', clickHandlerFunc);
$changeTime.addEventListener('change', changeGameTimeFunc);


// FUNCTIONS

function startGameFunc(){
    hide($start);
    $game.style.backgroundColor = 'white';
    score=0;
    $result.textContent = score;
    $changeTime.setAttribute('disabled', 'true');


    const interval = setInterval(()=>{
        let t = +$time.textContent;
        $time.textContent = (t - 0.1).toFixed(1);
        
        if( $time.textContent == 0 ){
            clearInterval(interval);
            endGameFunc();
        }
    
    }, 100);


    renderBox();

}


function renderBox(){

    $game.textContent = '';

    const color_index = random(0, colors.length-1); // 0-7
    const box_size = random(30, 70); // 30-70
    const game_size = $game.getBoundingClientRect(); // {x: , y: , width: 300, height: 300}
    const top = random(0, game_size.width - box_size - 5); // 0-250
    const left = random(0, game_size.width - box_size - 5); // 0-250

    const $box = document.createElement('div');
    $box.style.width = box_size + 'px';
    $box.style.height = box_size + 'px';
    $box.style.background =  colors[color_index];
    $box.style.position = 'absolute';
    $box.style.top = top+'px';
    $box.style.left = left+'px';
    $box.style.cursor = 'pointer';
    $box.setAttribute('data-box', 'true');

    $game.append($box);

}


function clickHandlerFunc(e){
  if(e.target.dataset.box){
    score++;
    $result.textContent = score;

    renderBox();
  }
}


function endGameFunc(){
    show($start);
    $game.style.backgroundColor = 'gray';
    $time.textContent = (+$changeTime.value).toFixed(1);
    $game.textContent = '';
    $changeTime.removeAttribute('disabled');
}


function changeGameTimeFunc(){
    $time.textContent = (+$changeTime.value).toFixed(1);
}


function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function hide($el){
    $el.classList.add('hide');
}

function show($el){
    $el.classList.remove('hide');
}


