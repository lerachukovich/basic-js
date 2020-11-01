const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
        if (!Array.isArray(members)) {
            return false;
        }
        let teamMembers = members.filter(el => typeof el === "string").sort().
        map(el => el.trim().charAt(0).toUpperCase()).sort().join("");
        return teamMembers;
};