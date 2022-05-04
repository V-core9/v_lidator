# v_rifier

Data V[a]rifier => v_rifier 😁

## 🔻 Beta STATE 001...0 xD

## 📚 How to use

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

3. **color**  
Color Checker that will verify if provided string is valid color in RGB, RGBA and hex format.

        // RGB
        v_rifier.isColor("25,25,25") //> true
        // RGBA
        v_rifier.isColor("25,25,25,.58") //> true
        
        // Hex
        v_rifier.isColor("#CBA") //> true
        v_rifier.isColor("#CBA5") //> true
        v_rifier.isColor("#FF00CC") //> true
        v_rifier.isColor("#FF00CC50") //> true
        
        // Invalid
        v_rifier.isColor("0,0,0,-.58") //> true
        v_rifier.isColor("FF00CC50") //> false

4. **email**  
Email Checker

        v_rifier.isEmail('slavko.vuletic92@gmail.com') //> true
        v_rifier('email','slavko.vuletic92@gmail.com') //> true

5. **function**  
Function Checker

        const sampleFunc = async () => {
          return console.log('yea');
        };

        v_rifier.isFunction(sampleFunc) //> true
        v_rifier('function', sampleFunc ) //> true

6. **hexadecimal**  
Hexadecimal Checker - returns true if provided string is a hexadecimal number.

        v_rifier.isHexadecimal( 'FAc0516' ) //> true
        v_rifier('hexadecimal', 1561313 ) //> false

7. **integer**  
Integer Checker

        v_rifier.isInteger( 123 ) //> true
        v_rifier('integer', 984351 ) //> true

8. **name**  
Name Checker

        v_rifier.isName( "Slavko Vuletic" ) //> true
        v_rifier('name', 123 ) //> false

9. **npmVersion**  
npmVersion Checker

        v_rifier.isNull( "1.2.1" ) //> true
        v_rifier('null', "55.798.15" ) //> true

        v_rifier.isNull( 123 ) //> false
        v_rifier('null', "55.-798.15" ) //> false
        v_rifier('null', "55.-798.15-" ) //> false

10. **null**  
Null Checker

        v_rifier.isNull( null ) //> true
        v_rifier('null', null ) //> true

11. **number**  
Number Checker

        v_rifier.isNumber( 123 ) //> true
        v_rifier('number', 123 ) //> true

12. **object**  
object Checker

        v_rifier.isObject( { name: "yea" } ) //> true
        v_rifier('object', 123 ) //> false

13. **password**  
password Checker - Verify password with confirmation password and returns true if password is valid [length & characters].

        v_rifier.isPassword( 'MyPassword123', 'MyPassword123' ) //> true
        v_rifier('password', 'MyPassword123', 'MyPassword123' ) //> true

        v_rifier.isPassword( 'MyPassword123', 123 ) //> false
        v_rifier('password', 'MyPassword123' ) //> false

14. **port**  
PORT Checker

        v_rifier.isPort( 8000 ) //> true
        v_rifier('port', 8000 ) //> true

        v_rifier.isPort( -8000 ) //> false
        v_rifier('port', 8000000 ) //> false

15. **string**  
string Checker

        v_rifier.isString( "random String" ) //> true
        v_rifier('string', "random String" ) //> true

        v_rifier.isString( 123 ) //> false
        v_rifier('string', 123 ) //> false

16. **undefined**  
undefined Checker

        v_rifier.isUndefined(  ) //> true
        v_rifier('undefined', undefined ) //> true

        v_rifier.isUndefined( 11 ) //> false
        v_rifier('undefined', "undefined" ) //> false

17. **username**  
username Checker

        v_rifier.isUsername( 123 ) //> true
        v_rifier('username', 123 ) //> true


## 🚀 Advanced Usage

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


## **✅ Tests and Coverage with Jest**

![Test and Coverage with Jest](coverage.png)
