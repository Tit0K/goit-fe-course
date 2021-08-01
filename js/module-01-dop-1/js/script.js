'use strict';

const sharmPlaces = 3;
const hurghadaPlaces = 6;
const tabaPlaces = 9;
const sorryMessage = 'Нам очень жаль, приходите еще!';

let userGroup;
let groupPlaces;

let userInput = prompt('Введите число необходимых мест:');

userInput = Number(userInput);

if(!userInput) {
    alert('Увы... это не то что нужно было отправить\n' + sorryMessage);
} else if(!Number.isNaN(userInput)) {

    if(userInput <= sharmPlaces) {
        userGroup = 'Шарм';
        groupPlaces = sharmPlaces;

    } else if (userInput <= hurghadaPlaces) {
        userGroup = 'Хургада';
        groupPlaces = hurghadaPlaces;

    } else if (userInput <= tabaPlaces) {
        userGroup = 'Таба';
        groupPlaces = tabaPlaces;
    }

    if(userGroup != null) {
        userInput =  confirm(`Есть ${groupPlaces} мест в группе ${userGroup}, согласны ли быть в этой группе?`);
        if(userInput) {
            alert(`Приятного путешествия в группе ${userGroup}`);
        }

        else {
            alert(sorryMessage);
        }
    }
    
    else {
        alert(sorryMessage);
    }
}