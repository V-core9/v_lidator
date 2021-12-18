const v_database = require("v_database");

module.exports = async (username) => {
    const users = await v_database.item.view('users');
    if (users.indexOf(username) > -1) {
        return false;
    }
    return true;
};
