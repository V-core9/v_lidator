const v_rify = require('../core/v_rify');
const { notEmpty } = require('v_is_empty_value');

const username_schema ={
  min: 3,
  max: 32,
  format: /^[A-Za-z][A-Za-z0-9_.]{0,255}$/,
  msg: {
    success: "✅ Success\n🤪 Username Verified Successfully.",
    error: {
      min: "🤯 Username is too short.",
      max: "💥 Username exceeded allowed maximum.",
      format: "🙋‍♂️ Username can only have letters, numbers, underscore and dot.",
    }
  },
  verify: async (value) => {
    return (await notEmpty(value)) ? await v_rify(username_schema, value) : [{"msg": "Missing input.", "type": "error" }];
  }
};

module.exports = username_schema;
