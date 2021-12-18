const v_database = require("v_database");

module.exports = async (email) => {
    const user_emails = await v_database.item.view('user_emails');
    if (user_emails.indexOf(email) > -1) {
        return false;
    }
    return true;
};
