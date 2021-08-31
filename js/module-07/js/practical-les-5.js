/*     
* Задание 5
Получить пользоваля (не массив) по email (поле email, он уникальный).
*/

const getUserByEmail = (users, email) =>
  users.find(user => user.email == email);

console.log(getUserByEmail(users, 'shereeanthony@kog.com'));
console.log(getUserByEmail(users, 'elmahead@omatom.com'));
