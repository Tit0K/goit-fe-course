'use strict';

const login = "admin";
const password = "123";

let userInput = prompt('Введите логин:');

if(!userInput) {
    alert('Отменено пользователем');
} else if(userInput != login) {
    alert('Доступ запрещен, неверный логин!');
} else if(userInput == login) {
    userInput = prompt('Введите пароль:');
    if(!userInput){
        alert('Отменено пользователем');  
    } else if(userInput != password) {
        alert('Доступ запрещен, неверный пароль!');
    } else if(userInput == password) {
        alert('Добро пожаловать!');
    }
}