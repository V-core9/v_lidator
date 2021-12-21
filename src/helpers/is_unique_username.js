const vDB = require("v_database");

module.exports = async (username) => {
  return (await vDB.item.view('users', username)) ? true : false;
};
