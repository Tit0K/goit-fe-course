const getUniqueSkills = users =>
  users
    .reduce((skillsList, user) => {
      user.skills.forEach(skill => {
        if (!skillsList.includes(skill)) {
          skillsList.push(skill);
        }
      });
      return skillsList;
    }, [])
    .sort();

console.log(getUniqueSkills(users));
