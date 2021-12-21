const vDB = require("v_database");

const v_rifier = require("../../../");

const {userEmails, user} = require('../templates');
const {isUniqueUsername, isUniqueEmail} = require('../helpers');


module.exports = async (data) => {

  const err = [];

  if (!await isUniqueUsername(data.username)) err.push({ type: "ERROR", message: "💎 USERNAME is not unique. [ " + data.username + " ]" });
  if (!await isUniqueEmail(data.email)) err.push({ type: "ERROR", message: "💎 EMAIL is not unique. [ " + data.email + " ]" });

  var validResp = await v_rifier.username(data.username);
  if (validResp !== true) err.push(validResp);

  validResp = await v_rifier.email(data.email);
  if (validResp !== true) err.push(validResp);

  validResp = await v_rifier.password(data.password, data.password_confirm);
  if (validResp !== true) err.push(validResp);

  if (err.length === 0) {
    return (await vDB.item.new('users', await user(data), data.username) && await vDB.item.new('user_emails', await userEmails(data), data.email));
  }

  //if (process.v.log_to_console === true || process.v.log_to_console === 'OPTIMIZED') console.log('\n🔻Validations Failed : Looks like there were some errors.\n' + JSON.stringify(err, true, 2));

  return err;
};


