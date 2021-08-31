/*     
* Задание 4
Получить массив только неактивных пользователей (поле isActive).
*/

const getInactiveUsers = users => users.filter(user => !user.isActive);

console.log(getInactiveUsers(users));
