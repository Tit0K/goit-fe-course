'use strict';

const numbers = [];
let userInput;
let total = 0;

do {
    userInput = prompt('Введите число:');

    if(!isNaN(userInput)) {
        if(userInput == null) break;
        numbers.push(userInput);
    } else {
        alert('Было введено не число, попробуйте еще раз');
    }
} while(userInput != null)

if(numbers.length != 0) {
    console.log('Элементов в масиве: ', numbers.length);
    for(const num of numbers) {
        total += Number(num);
    }
    alert(`Общая сумма чисел равна ${total}`);
}