const v_lidator = require('../source/v_lidator');

mainTryout = async () => {
  console.time("MAIN_TRYOUT_ASYNC");
  // Here we either provide PATH to folder with SCHEMAS or put it into config in package.json
  // 1st lets load it by providing path to folder
  //console.log(await v_lidator.load());

  // List of schemas
  console.log(await v_lidator.list());

  // Count of schemas [in-memory >> loaded for use]
  console.log(await v_lidator.count());

  // remove Schema 
  console.log(await v_lidator.remove("pages"));

  // List of schemas
  console.log(await v_lidator.list());

  // Count of schemas [in-memory >> loaded for use]
  console.log(await v_lidator.count());


  // New Schema 
  console.log(await v_lidator.new("pages"));

  // List of schemas
  console.log(await v_lidator.list());

  // Count of schemas [in-memory >> loaded for use]
  console.log(await v_lidator.count());

  console.log(await v_lidator.load());
  // List of schemas
  console.log(await v_lidator.list());

  // Count of schemas [in-memory >> loaded for use]
  console.log(await v_lidator.count());
  console.timeEnd("MAIN_TRYOUT_ASYNC");

};

mainTryout();


v_Tryout = async () => {
  console.time("V_TRYOUT_WAT-WAT");
  v_lidator.load();
  v_lidator.list();
  v_lidator.count();
  v_lidator.remove("pages");
  v_lidator.list();
  v_lidator.count();
  v_lidator.new("pages");
  v_lidator.list();
  v_lidator.count();
  v_lidator.load();
  v_lidator.list();
  v_lidator.count();
  v_lidator.remove("pages");
  console.timeEnd("V_TRYOUT_WAT-WAT");
};

//v_Tryout();
