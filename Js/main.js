let inputElem  = document.querySelector('.name-work');
let addBtnElem = document.querySelector('.add-btn');
let divContainerElem = document.querySelector('.list-works');
let eraseBtnElem = document.querySelector('.erase-btn');
let backgroundColor

let colors ={
    white: '#fff',
    orange: '#FFD07F',
    yellow:  '#FCFB82',
    paleGreen:  '#D3F97D',
    green:  '#76F87F',
    blueGreen:  '#7DFAD5',
    paleBlue:  '#7EFBFF',
    blue:  '#7FD2F9',
    deepBlue:  '#7B83FB',
    purple: '#D788FF',
    pink: '#FF87FD',
}

function getColor(event){
    
    if(Object.keys(colors).includes(event.target.id)){
        backgroundColor = colors[event.target.id];
    }

    inputElem.style.backgroundColor = backgroundColor;
}

function deleteTask (event){
    let taskCard = event.target;
    taskCard.style.display = 'none';
}

addBtnElem.addEventListener('click', function(){

    let pElem = document.createElement('p');
    pElem.innerHTML = inputElem.value;

    let divElem = document.createElement('div');
    divElem.style.backgroundColor = backgroundColor;
    divElem.classList.add('card-task');
    divElem.addEventListener('click', deleteTask);
    divElem.append(pElem);

    divContainerElem.append(divElem);

    inputElem.style.backgroundColor = '#fff';
    inputElem.value = '';
})

inputElem.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        let pElem = document.createElement('p');
        pElem.innerHTML = inputElem.value;

        let divElem = document.createElement('div');
        divElem.style.backgroundColor = backgroundColor;
        divElem.classList.add('card-task');
        divElem.addEventListener('click', deleteTask);
        divElem.append(pElem);

        divContainerElem.append(divElem);

        inputElem.style.backgroundColor = '#fff';
        inputElem.value = '';
    }
})

eraseBtnElem.addEventListener('click', function(){
    inputElem.value = '';
})

