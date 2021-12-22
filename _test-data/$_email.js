const email = require('../src/schema/email.js');

const $_email = (string) => {
    return [
        {
            "confirm": undefined,
            "input_value": string,
            "msg": email.msg.error.format,
            "suggest": "Try removing special characters.",
            "type": "error"
        }
    ];
};

module.exports = $_email;
