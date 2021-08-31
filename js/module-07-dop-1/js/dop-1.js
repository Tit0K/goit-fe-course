let getSkillsList = (skillsList, user) => {
  user.skills.map(skill => {
    if (!skillsList.includes(skill)) {
      skillsList.push(skill);
    }
  });
  return skillsList;
};

const getUniqueSkills = users => users.reduce(getSkillsList, []).sort();

console.log(getUniqueSkills(users));

let arg = (a, b) => {
  return a.friends.length - b.friends.length;
};

const getNamesSortedByFriendsCount = users =>
  users.sort(arg).map(user => user.name);

console.log(getNamesSortedByFriendsCount(users));
