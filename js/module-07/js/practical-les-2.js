/*     
* Задание 2
Получить массив объектов пользователей по цвету глаз (поле eyeColor).
*/

const getUserByEyeColor = (users, color) =>
  users.filter(user => user.eyeColor == color);

console.log(getUserByEyeColor(users, 'blue'));
