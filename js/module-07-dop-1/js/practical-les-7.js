/*     
* Задание 7
Получить общую сумму баланса (поле balance) всех пользователей.
*/

const getTotalBalance = users =>
  users.reduce((total, user) => (total += user.balance), 0);

console.log(getTotalBalance(users));
