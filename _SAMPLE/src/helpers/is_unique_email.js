const vDB = require("v_database");

module.exports = async (email) => {
    return (await vDB.item.view('user_emails', email) === false) ? true : false;
};
