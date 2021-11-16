const validCharacters = require('./_characters');



console.log(`Valid Characters [ TRUE ]  : ${validCharacters("pnsdnow123", ["/", "*", ":", "\\"])}`);
console.log(`Valid Characters [ TRUE ]  : ${validCharacters("asdi apsp np wd d0w8 wd00921378 0 2018", ["/", "*", ":", "\\"])}`);
console.log(`Valid Characters [ FALSE ]  : ${validCharacters("dniwaon diw no nwiq0e902  woeqn owenomoin .. qwoneinwo q", ["."])}`);