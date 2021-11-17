const v_lidator = require("../src");

var dataValidator =  v_lidator;
var dataValidator02 = v_lidator;

console.log(dataValidator);

console.log(dataValidator.value());

dataValidator.email.set("slavko.vuletic92@gmail.com");
dataValidator.name.set("Slavko Vuletic");
dataValidator.text.set("Slavko Vuletic Slavko VuleticSlavko Vuletic Slavko VuleticSlavko Vuletic Slavko VuleticSlavko Vuletic Slavko VuleticSlavko Vuletic Slavko VuleticSlavko Vuletic Slavko VuleticSlavko Vuletic Slavko VuleticSlavko Vuletic Slavko VuleticSlavko Vuletic Slavko Vuletic");
dataValidator.title.set("V-core9");

console.log(dataValidator.value());





dataValidator02.email.set(1234567);
dataValidator02.name.set(1234567);
dataValidator02.text.set(1234567);
dataValidator02.title.set(1234567);

console.log(dataValidator02.value());
