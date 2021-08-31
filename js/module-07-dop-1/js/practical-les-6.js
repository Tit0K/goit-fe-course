/*     
* Задание 6
Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
*/

const getUserWithAge = (users, min, max) =>
  users.filter(user => user.age > min && user.age < max);

console.log(getUserWithAge(users, 20, 30));
console.log(getUserWithAge(users, 30, 40));
