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
    console.log(event.target.id)
    if(Object.keys(colors).includes(event.target.id)){
        backgroundColor = colors[event.target.id];
    }

    inputElem.style.backgroundColor = backgroundColor;
}