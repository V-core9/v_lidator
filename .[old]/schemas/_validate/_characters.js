const validCharacters = (data = null, forbiddenCharacters = []) => {
    if ( data === null ) {
        console.log("No input value");
        return false;
    }

    if ( forbiddenCharacters.length === 0 ) {
        console.log("Accepts all characters");
        return true; 
    } else {
        const forbiddenCharsCount = forbiddenCharacters.length;
        // console.log(forbiddenCharsCount);
        var hasForbidden = false;
        
        for (let i = 0; i < forbiddenCharacters.length; i++) {
            if (data.indexOf(forbiddenCharacters[i]) > -1) {
                //console.log(`Detected Forbidden Character <[  ${forbiddenCharacters[i]}  ]>`)
                i = forbiddenCharsCount + i;
                hasForbidden = true;
            }
        }

        return !hasForbidden;
    }
};

module.exports = validCharacters;
