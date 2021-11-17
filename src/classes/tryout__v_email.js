const email = require("./v_email");

const test01 = email;
console.log(test01);

var errorMonitor = [];

if (test01.set(1235466776123)) errorMonitor.push({id: 1, desc: "set email to number"});
if (test01.set("1235466776123")) errorMonitor.push({id: 2, desc: "set email to string"});

if (test01.set("@google.com")) errorMonitor.push({id: 3, desc: "set email to bad mail"});
if (!test01.set("1@google.com")) errorMonitor.push({id: 4, desc: "set email to good mail"});

console.log(test01.get());
if(test01.get() !=="1@google.com") errorMonitor.push({id: 5, desc: "set email to good mail"});

console.log(errorMonitor);
