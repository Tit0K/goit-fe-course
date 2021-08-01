'use strict';

const passwords = ['qwer','123','0101'];
let attempts = 3;
let access = false;

do{
    const userInput = prompt('Введите ваш пароль:'); 
    if(userInput == null) break;
    for(const password of passwords) {
        if(password == userInput) {
            access = true;
            alert('Добро пожаловать!');
            break;
        }
    }
    if(!access) {
        attempts -= 1;
        if(attempts == 0) {
            alert('У вас закончились попытки, аккаунт заблокирован!');
            break;
        }
        alert(`Неверный пароль, у вас осталось ${attempts} попыток`);
    }
} while(!access)