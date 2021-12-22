# v_rifier
Data V[a]rifier => v_rifier 😁


    const v_rifier = require('v_rifier');

    // [Email] will only validate using regex
    v_rifier.email(val);

    // [Username] has allowed characters only in special format
    v_rifier.username(val);

    // [Name] can include space and ' char
    v_rifier.name(val);

    // [Password] has list of allowed characters and accepts special chars
    v_rifier.password(val, val);

    // [Number] can accept both float and integer
    v_rifier.number(val);

    // [Integer] only accepts round numbers
    v_rifier.integer(val);

    // [Texts] accepts multiline string value
    v_rifier.text(val);

    // Returning TRUE || Array of Errors

## **✅ Tests and Coverage with Jest**    

![Test and Coverage with Jest](coverage.png)    
## ALPHA STATE 000...0 xD
