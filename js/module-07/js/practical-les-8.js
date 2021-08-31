/*     
* Задание 8
Массив имен всех пользователей у которых есть друг с указанным именем.
*/

const getUserByFriend = (users, name) =>
  users.filter(user => user.friends.includes(name));

console.log(getUserByFriend(users, 'Briana Decker'));
console.log(getUserByFriend(users, 'Goldie Gentry'));
