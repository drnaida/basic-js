module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let name = [];
    members.forEach(item => {
      if (typeof(item) == 'string') {
        name.push(item.trim()[0].toUpperCase());
      }
    });
    name = name.sort().join('');
    return name;
  } else {
    return false;
  }

};
