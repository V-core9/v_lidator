const v_email = require("./v_email");

const test01 = new v_email();
console.log(test01);

var errs = [];

if (test01.set(1235466776123)) errs.push({id: 123, desc: "set email to number"});
if (test01.set("1235466776123")) errs.push({id: 222, desc: "set email to string"});

if (test01.set("@google.com")) errs.push({id: 222, desc: "set email to bad mail"});
if (!test01.set("1@google.com")) errs.push({id: 222, desc: "set email to good mail"});

console.log(errs);
