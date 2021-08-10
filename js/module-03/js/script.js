'use strict';


const loginsArr = ['botee', 'qwerty', 'user18'];

const isLoginValid = (login) => {
    if(login.length >=4 && login.length <=16) {
        return true;
    } else return false;
};

const isLoginUnique = (allLogins, login) => {
    return allLogins.includes(login);
};

const addLogin = (allLogins, login) => {
    if(isLoginValid(login)) {
        if(!isLoginUnique(loginsArr, login)) {
            loginsArr.push(login);
            console.log('Логин успешно добавлен!');
        } else {
            console.log('Такой логин уже используется!');
        }
    } else {
        console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    }
};

addLogin(loginsArr, '1');
addLogin(loginsArr, '1234567890123456789');
addLogin(loginsArr, 'botee');
addLogin(loginsArr, 'bote2');

console.log('loginsArr: ', loginsArr);