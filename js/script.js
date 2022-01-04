'use strict';

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let simbol = ['!', '@', '#', '$', '%', '?', '-', '+', '=', '~'];

const passLenght = document.querySelector('#passLenght');
const valueRange = document.querySelector('.valueRange');

const compareRandom = function(){
    Math.random(5) - 0.5;
};

const randomInteger = ( min, max ) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

function generatePassword(){
    let arr = [];

    if (document.querySelector('#number').checked){
        arr = arr.concat(number);
    }
    if (document.querySelector('#lowercase').checked){
        arr = arr.concat(lowercase);
    }
    if (document.querySelector('#uppercase').checked){
        arr = arr.concat(uppercase);
    }
    if (document.querySelector('#simbol').checked){
        arr = arr.concat(simbol); 
    }

    arr.sort(compareRandom);
    
    let password = '';
    let passLenght = document.querySelector('#passLenght').value;

    for (let i = 0; i < passLenght; i++ ){
        password += arr[randomInteger(0, arr.length - 1)];
    }
    document.querySelector('#result').textContent = password;

}
document.querySelector('#pass_start').addEventListener('click', generatePassword);
