const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
let dreamTeam = [];
  if (typeof members === "object" && members !== null && members.length >= 2) {
    members.forEach(element => {
      if (typeof element === "string") {
        element = element.trim();
        dreamTeam.push(element[0].toUpperCase());
      }
    });
  } else return false; 
  return dreamTeam.sort().toString().replaceAll(",", "");
}

module.exports = {
  createDreamTeam
};
