'use strict';

const passwords = ['qwer','123','0101'];
let attempts = 3;
let userInput;

do{
    userInput = prompt('Введите ваш пароль:');
    if(userInput == null) break;
    if(passwords.includes(userInput)) {
        alert('Добро пожаловать!');
        break;
    } else {
        attempts -= 1;
        if(attempts == 0) {
            alert('У вас закончились попытки, аккаунт заблокирован!');
            break;
        }
        alert(`Неверный пароль, у вас осталось ${attempts} попыток`);
    }

} while(attempts != 0)