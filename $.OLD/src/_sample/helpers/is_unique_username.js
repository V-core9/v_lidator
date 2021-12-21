const vDB = require("v_database");

module.exports = async (username) => {
  return (await vDB.item.view('users', username) === false) ? true : false;
};
