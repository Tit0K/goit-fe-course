const getNamesSortedByFriendsCount = users =>
  users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);

console.log(getNamesSortedByFriendsCount(users));
