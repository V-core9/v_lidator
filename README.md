# v_rifier

Data V[a]rifier => v_rifier 😁

    const v_rifier = require('v_rifier');
    v_rifier.loadBuiltIns();

Built-in modules:

1. **array**  
Array Checker

        v_rifier.isArray([1,2,3]) //> true

2. **bool**  
Boolean Checker

        v_rifier.isBool(true) //> true
        v_rifier.isBool(false) //> true

        v_rifier('bool', true) //> true
        v_rifier('bool', false) //> true

        v_rifier.isBool(112) //> false
        v_rifier('bool', 0) //> false
        v_rifier.isBool("true") //> false
        v_rifier('bool', "true") //> false

3. **email**  
Email Checker

        v_rifier.isEmail('slavko.vuletic92@gmail.com') //> true
        v_rifier('email','slavko.vuletic92@gmail.com') //> true

4. **function**  
Function Checker

        const sampleFunc = async () => {
          return console.log('yea');
        };

        v_rifier.isFunction(sampleFunc) //> true
        v_rifier('function', sampleFunc ) //> true

5. **integer**  
Integer Checker

        v_rifier.isInteger( 123 ) //> true
        v_rifier('integer', 123 ) //> true

6. **name**  
Name Checker

        v_rifier.isName( 123 ) //> true
        v_rifier('name', 123 ) //> true

7. **null**  
Null Checker

        v_rifier.isNull( 123 ) //> true
        v_rifier('null', 123 ) //> true

8. **number**  
Number Checker

        v_rifier.isNumber( 123 ) //> true
        v_rifier('number', 123 ) //> true

9. **object**  
object Checker

        v_rifier.isObject( 123 ) //> true
        v_rifier('object', 123 ) //> true

10. **password**  
password Checker

        v_rifier.isPassword( 123 ) //> true
        v_rifier('password', 123 ) //> true

11. **string**  
string Checker

        v_rifier.isString( 123 ) //> true
        v_rifier('string', 123 ) //> true

12. **undefined**  
undefined Checker

        v_rifier.isUndefined( 123 ) //> true
        v_rifier('undefined', 123 ) //> true

13. **username**  
username Checker

        v_rifier.isUsername( 123 ) //> true
        v_rifier('username', 123 ) //> true

## **✅ Tests and Coverage with Jest**

![Test and Coverage with Jest](coverage.png)

## ALPHA STATE 000...0 xD

## 📚 Advanced Usage

### 1. Register Custom Type

        await v_rifier.register("myType", (value) =>  value > 100 );

    So now you can use v_rifier.**isMyType**(val) to check if value is greater than 100.

        await v_rifier.isMyType(200) //> true

    Or you can use v_rifier("**myType**", val) to check if value is greater than 100.

        await v_rifier('myType', 200) //> true

### 2. Unregister Custom Type

        await v_rifier.unregister("myType");

### 3. Load Built-in Modules

    await v_rifier.loadBuiltIns();

### 4. Only Custom Types

After loading module, you can create your custom validation type without even loading built-ins. This provides the ability to create and use only your own custom types.

    const v_rifier = require('..');

    (async () => {

      console.log(await v_rifier.listTypes()); //> []

      // Create a custom type
      console.log(await v_rifier.register('customType', async (value) => (!isNaN(value) && value > 0))); //> true

      console.log(await v_rifier.listTypes()); //> [ 'customtype' ]

      // Use it

      // One way...
      console.log(await v_rifier('customType', 123)); //> true
      console.log(await v_rifier('customType', -123)); //> false

      // Or other way...
      console.log(await v_rifier.isCustomType(123)); //> true
      console.log(await v_rifier.isCustomType(-123)); //> false

      // Or Unregister It (if you want)
      console.log(await v_rifier.unregister('customType')); //> true

      console.log(await v_rifier.listTypes()); //> []

    })();

### 5. Or a combination of built-ins and custom types

Main usecase basically, where you would want to check on something like a value being a number and also greather than some other value...while not caring about it being empty/undefined/anything else.

    const v_rifier = require('..');

    (async () => {
      await v_rifier.loadBuiltIns();

      // Create a custom type
      console.log(await v_rifier.register('customType', async (value) => (await v_rifier('number', value) && value > 0))); //> true

      // Or other way...
      console.log(await v_rifier.isCustomType(123)); //> true
      console.log(await v_rifier.isCustomType(-123)); //> false

      console.log(await v_rifier.isCustomType("-123")); //> false

    })();
