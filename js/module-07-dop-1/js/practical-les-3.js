/*     
* Задание 3
Получить массив имен пользователей по полу (поле gender).
*/

const getUserByGender = (users, gender) =>
  users.filter(user => user.gender == gender).map(user => user.name);

console.log(getUserByGender(users, 'male'));
