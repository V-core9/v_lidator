const v_name = require("./v_name");

const test01 = new v_name();
console.log(test01);

var errs = [];

if (test01.set(1235466776123)) errs.push({id: 1, desc: "set v_name to number [number]"});
if (test01.set("1235466776123")) errs.push({id: 2, desc: "set v_name to string [detects number]"});

if (!test01.set("google")) errs.push({id: 3, desc: "set v_name to google"});
if (test01.set("googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle")) errs.push({id: 3, desc: "googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle"});
if (!test01.set("googlegooglegooglegooglegoogleg")) errs.push({id: 3, desc: "googlegooglegooglegooglegoogleg"});
if (!test01.set("@google.com")) errs.push({id: 3, desc: "set v_name to @google.com"});
if (!test01.set("1@google.com")) errs.push({id: 4, desc: "set v_name to 1@google.com"});

console.log(errs);
