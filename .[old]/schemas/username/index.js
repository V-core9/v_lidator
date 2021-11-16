const usernameSchema = {
    length: {
        min: 5,
        max: 40,
    },
    forbidenCharacterss : [ `\\`, `/`, `|`, `*`, `?`, `"`, `<`, `>`, `:` ]
}

module.exports = usernameSchema;