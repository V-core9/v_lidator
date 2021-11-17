const v_definitions = require('../source/v_definitions');

tryItOut01 =  async () => {

  console.log(await v_definitions.load());

  console.log(v_definitions.$_items);

  console.log(await v_definitions.count());

};

tryItOut01();
