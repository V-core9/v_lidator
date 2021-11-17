const email = require("./v_email");

const test01 = email;
console.log(test01);

var errorMonitor = [];

if (test01.set(1235466776123)) errorMonitor.push({id: 123, desc: "set email to number"});
if (test01.set("1235466776123")) errorMonitor.push({id: 222, desc: "set email to string"});

if (test01.set("@google.com")) errorMonitor.push({id: 222, desc: "set email to bad mail"});
if (!test01.set("1@google.com")) errorMonitor.push({id: 222, desc: "set email to good mail"});

console.log(errorMonitor);
