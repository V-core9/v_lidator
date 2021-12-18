const v_name = require("./v_name");

const test01 = new v_name();
console.log(test01);

var errorMonitor = [];

if (test01.set(1235466776123)) errorMonitor.push({id: 1, desc: "set v_name to number [number]"});
if (test01.set("1235466776123")) errorMonitor.push({id: 2, desc: "set v_name to string [detects number]"});

if (!test01.set("google")) errorMonitor.push({id: 3, desc: "set v_name to google"});
if (test01.set("googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle")) errorMonitor.push({id: 3, desc: "googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle"});
if (!test01.set("googlegooglegooglegooglegoogleg")) errorMonitor.push({id: 3, desc: "googlegooglegooglegooglegoogleg"});
if (!test01.set("@google.com")) errorMonitor.push({id: 3, desc: "set v_name to @google.com"});
if (!test01.set("1@google.com")) errorMonitor.push({id: 4, desc: "set v_name to 1@google.com"});

console.log(errorMonitor);
